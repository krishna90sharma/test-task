// let nextContactId = 31;
export const addDevice = (deviceName, imei_no, modelNo, configuration, deviceType, display) => ({
    type: "ADD_DEVICE",
    deviceName: deviceName ? deviceName : "",
    imei_no: imei_no ? imei_no : "",
    modelNo: modelNo ? modelNo : "",
    display: display ? display : "",
    configuration: configuration ? configuration : "",
    deviceType: deviceType ? deviceType : "",
 });
 
 export const updateContact = (id, field, value) => ({
    type: "UPDATE_CONTACT",
    id: id,
    field: field,
    value: value
 });
 
 export const contactDetails = id => ({
    type: "CONTACT_DETAILS",
    id
 });
 
 export const setEditContactFlag = flag => ({
    type: "EDIT_CONTACT",
    flag
 });
 
 export const setVisibilityFilter = filter => ({
    type: "SET_VISIBILITY_FILTER",
    filter
 });
 
 export const contactsSearch = searchTerm => ({
    type: "FILTER_CONTACT",
    payload: searchTerm
 });
 
 export const toggleStarredContact = id => ({
    type: "TOGGLE_STARRED_CONTACT",
    id
 });
 
 export const deleteContact = id => ({
    type: "DELETE_CONTACT",
    id
 });
 
 export const contactVisiblityFilter = {
    SHOW_ALL: "SHOW_ALL",
    FREQUENT_CONTACT: "FREQUENT_CONTACT",
    STARRED_CONTACT: "STARRED_CONTACT",
    ENGINEERING_DEPARTMENT_CONTACT: "ENGINEERING_DEPARTMENT_CONTACT",
    SALES_DEPARTMENT_CONTACT: "Sales",
    SUPPORT_DEPARTMENT_CONTACT: "SUPPORT_DEPARTMENT_CONTACT",
    SEARCH_CONTACT: "SEARCH_CONTACT",
    DELETED_CONTACT: "DELETED_CONTACT"
 };
 