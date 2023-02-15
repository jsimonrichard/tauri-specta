// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

const invoke = window.__TAURI_INVOKE__;

/** 
 * @param { string } myName
 * @returns { Promise<string> }
 */
export function helloWorld(myName) {
    return invoke("hello_world", { myName })
}

/** 
 * @returns { Promise<string> }
 */
export function goodbyeWorld() {
    return invoke("goodbye_world")
}

/** 
 * @returns { Promise<MyStruct> }
 */
export function someStruct() {
    return invoke("some_struct")
}
