import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '1e76225c0e9a40e4afe97614438d7487'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: 'ec4f2ff854654dbdbfc701102ab44768'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'a63ff689d9da4a8c97c541c8eb3b3cc0'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '65222c24a0e244dd88bfb53ce2a415f3'
                    }
                }
            }
        }
    }
}
