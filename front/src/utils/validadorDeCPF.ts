export const validarCPF = (cpf: string) => {
    return /^\d{11}$/.test(cpf.replace(/\D/g, ""));
};

export const formatadorDeCPF = (cpf: string) => {
    let apenasNumeros = cpf.replace(/\D/g, '');

    if (apenasNumeros.length > 11) {
        apenasNumeros = apenasNumeros.slice(0, 11);
    }

    return apenasNumeros
        .replace(/^(\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
}