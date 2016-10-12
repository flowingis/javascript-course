/*
    In ECMA6 è possibile esportare dei moduli e utilizzarli in qualsiasi altro file,
    ogni import deve avere un nome (in questo caso si chiama named export)
 */
export const object = {
    a:1,
    b:2
};

export const object2 = {
    a:2,
    b:3
};

/*
    È inoltre possibile esportare un membro "speciale" tramite la parola chiave default. In questo caso si chiama
    default export
 */
export default (val) => val+1;