import dvr from 'mobx-react-form/lib/validators/DVR'
import validatorjs from 'validatorjs'
import MobxReactForm from 'mobx-react-form'
import { reaction } from 'mobx'

function getReactFormValidation(
    fields,
    successHandler = (form) => null,
    errorHandler = () => null,
) {
    // const PASSWORD_VALIDATOR =
    //     /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    const hooks = {}

    const plugins = {
        dvr: dvr({
            package: validatorjs,
            extend: ({ validator }) => {
                const messages = validator.getMessages('en')
                messages.between =
                    'This :attribute length must be between :min and :max characters.'
                validator.setMessages('en', messages)
            },
        }),
        // dvr: dvr(),
    }

    // validatorjs.register(
    //     'abc',
    //     (value) => {
    //         return value.match(PASSWORD_VALIDATOR)
    //     },
    //     'The field must be valid',
    // )

    const formOptions = {
        validateOnChange: true,
    }

    if (successHandler) {
        hooks.onSuccess = successHandler
    }

    if (errorHandler) {
        hooks.onError = errorHandler
    }

    hooks.onInit = (form) => {
        reaction(
            () => form.values(),
            () => form.validate(),
        )
    }

    return new MobxReactForm({ fields }, { plugins, hooks, formOptions })
}

export { getReactFormValidation }
