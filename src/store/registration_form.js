import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export const registrationStore = defineStore('registrationStore', () => {
    const isHaveRegistrationForm = ref(false)
    const isFormComplete = ref(false)
    const registrationForm = ref({
        workName: '',
        competitionGroup: '',
        schoolName: '',
        teamName: '',
        qualifications: [],
        q2: '',
        contactInfo: '',
        enrollmentFile: null,
        informationFile: null
    })
    const uploadFileForm = ref({
        team1: [null, null, null],
        team2: [null, null, null],
        team3: [null, null, null],
        team4: [null, null, null],
        teachingPlan: null,
        teachingReport: null,
        talentTrainingPlan: null,
        courseStandard: null,
        teachingMaterial: null
    })

    function _turnRaw2UrlByUploadFile() {
        let keys1 = ['team1', 'team2', 'team3', 'team4']
        keys1.forEach(key => {
            uploadFileForm.value[key] = uploadFileForm.value[key].map(file => {
                if (file) {
                    file.url = URL.createObjectURL(file.raw)
                    return file
                }
                return null
            })
        })
        let keys2 = ['teachingPlan', 'teachingReport', 'talentTrainingPlan', 'courseStandard', 'teachingMaterial']
        keys2.forEach(key => {
            uploadFileForm.value[key].url = URL.createObjectURL(uploadFileForm.value[key].raw)
        })
    }
    function _turnRaw2UrlByRegistrationForm() {
        if (registrationForm.value.enrollmentFile) {
            registrationForm.value.enrollmentFile.url = URL.createObjectURL(registrationForm.value.enrollmentFile.raw)
        }
        if (registrationForm.value.informationFile) {
            registrationForm.value.informationFile.url = URL.createObjectURL(registrationForm.value.informationFile.raw)
        }
    }

    const blobToFile = (blob, fileName) => {
        return new File([blob], fileName, {type: blob.type});
    }
    function _turnUrl2RawByUploadFile() {
        let keys1 = ['team1', 'team2', 'team3', 'team4']
        keys1.forEach(key => {
            uploadFileForm.value[key] = uploadFileForm.value[key].map(file => {
                if (file) {
                    file.raw = blobToFile(file.url, file.name)
                    return file
                }
                return null
            })
        })
        let keys2 = ['teachingPlan', 'teachingReport', 'talentTrainingPlan', 'courseStandard', 'teachingMaterial']
        keys2.forEach(key => {
            uploadFileForm.value[key].raw = blobToFile(uploadFileForm.value[key].url, uploadFileForm.value[key].name)
        })
    }
    function _turnUrl2RawByRegistrationForm() {
        if (registrationForm.value.enrollmentFile) {
            registrationForm.value.enrollmentFile.raw = blobToFile(registrationForm.value.enrollmentFile.url, registrationForm.value.enrollmentFile.name)
        }
        if (registrationForm.value.informationFile) {
            registrationForm.value.informationFile.raw = blobToFile(registrationForm.value.informationFile.url, registrationForm.value.informationFile.name)
        }
    }

    function setUploadFileFormAndSave(uf) {
        isFormComplete.value = true
        uploadFileForm.value = uf
        _turnRaw2UrlByUploadFile()
        localStorage.setItem('uploadFileForm', JSON.stringify(uploadFileForm.value))
    }

    function setRegistrationFormAndSave(rf) {
        isHaveRegistrationForm.value = true
        registrationForm.value = rf
        _turnRaw2UrlByRegistrationForm()
        localStorage.setItem('registrationForm', JSON.stringify(registrationForm.value))
    }

    function clearRegistrationForm() {
        isHaveRegistrationForm.value = false
        isFormComplete.value = false
        registrationForm.value = {
            workName: '',
            competitionGroup: '',
            schoolName: '',
            teamName: '',
            qualifications: [],
            q2: '',
            contactInfo: '',
            enrollmentFile: null,
            informationFile: null
        }
        uploadFileForm.value = {
            team1: [null, null, null],
            team2: [null, null, null],
            team3: [null, null, null],
            team4: [null, null, null],
            teachingPlan: null,
            teachingReport: null,
            talentTrainingPlan: null,
            courseStandard: null,
            teachingMaterial: null
        }
        localStorage.removeItem('registrationForm')
        localStorage.removeItem('uploadFileForm')
    }

    function loadRegistrationForm() {
        const rF = JSON.parse(localStorage.getItem('registrationForm'))
        if (rF) {
            isHaveRegistrationForm.value = true
            registrationForm.value = rF
            _turnUrl2RawByRegistrationForm()
        }
        const uF = JSON.parse(localStorage.getItem('uploadFileForm'))
        if (uF) {
            isFormComplete.value = true
            uploadFileForm.value = uF
            _turnUrl2RawByUploadFile()
        }
    }

    return {
        registrationForm,
        isHaveRegistrationForm,
        setRegistrationFormAndSave,
        clearRegistrationForm,
        loadRegistrationForm,
        setUploadFileFormAndSave,
        uploadFileForm,
        isFormComplete
    }
})