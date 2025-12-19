import { BusinessRule } from '@servicenow/sdk/core'

export default BusinessRule({
    $id: 'f1e9c3d353f132102a1279b0a0490e4f',
    action: ['insert'],
    script: script`
             (function executeRule(current, previous /*null when async*/) {
             
             	// Add your code here
             
             })(current, previous);`,
    set_field_value: 'description=test^EQ',
    table: 'incident',
    name: 'NowIDE',
    order: 100,
    when: 'before',
    active: true,
    add_message: false,
    abort_action: false,
})
