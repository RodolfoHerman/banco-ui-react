export const setNumberBRFormatter = (value: number) => {
    return parseFloat(String(value).toString())
        .toLocaleString('pt-BR', {minimumFractionDigits: 2});
}