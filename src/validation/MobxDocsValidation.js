import MobxReactForm from 'mobx-react-form'
import dvr from 'mobx-react-form/lib/validators/DVR'
import validatorjs from 'validatorjs'
import { fields } from '../common/config'

const plugins = { dvr: dvr(validatorjs) }

const hooks = {
    onSuccess(form) {
        debugger
        alert('Form is valid! Send the request here.')
        // get field values
        console.log('Form Values!', form.values())

        form.reset()
    },
    onError(form) {
        alert('Form has errors!')
        // get all form errors
        console.log('All form errors', form.errors())
    },
}

const LoginForm = new MobxReactForm({ fields }, { plugins, hooks })

export default LoginForm
