export const setNumberBRFormatter = (value: number | undefined) => {
    return(
        !!value 
            ? parseFloat(String(value).toString())
                .toLocaleString('pt-BR', {minimumFractionDigits: 2})
            : "0,00"
    );
}

export const setDateBRFormatter = (value: string | undefined) => {
    return(
        !!value
            ? (new Date(value)).toLocaleString().replace(" ", " -- ")
            : " -- "
    )
}
