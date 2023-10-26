import MobxReactForm from 'mobx-react-form'
import dvr from 'mobx-react-form/lib/validators/DVR'
import validatorjs from 'validatorjs'
import { reaction } from 'mobx'

const getMobxFormValidation = (
    fields,
    options = { successHandler: (form) => {}, errorHandler: (form) => {} },
) => {
    let hooks = {}
    const formOptions = {
        validateOnChange: true,
    }
    if (options.successHandler) {
        hooks.onSuccess = options.successHandler
    }

    if (options.errorHandler) {
        hooks.onError = options.errorHandler
    }

    hooks.onInit = (form) => {
        reaction(
            () => form.values(),
            () => form.validate(),
        )
    }

    const plugins = { dvr: dvr(validatorjs) }

    return new MobxReactForm({ fields }, { plugins, formOptions })
}
export { getMobxFormValidation }
