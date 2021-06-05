const isAdmin = window.location.host.split(".")[0] === "admin";
export default () => {
    return isAdmin;
}
