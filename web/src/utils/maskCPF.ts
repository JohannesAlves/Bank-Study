export const maskCPF = (v: string) => {
    if (v.length > 14) {
        console.log(v);
        return "";
    }
    v = v.replace(/\D/g, "");

    if (v.length <= 11) {
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    return v;
};
