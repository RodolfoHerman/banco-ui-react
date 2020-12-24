import { ContaDTO } from "../operation/ContaOperation";

export const hasNoError = (formValue: ContaDTO): boolean => {
    return ((!!formValue.deposito) && (!!formValue.valor));
}

export const setErrors = (
    formValue: ContaDTO,
    setErrorRadio: React.Dispatch<React.SetStateAction<boolean>>, 
    setErrorInput: React.Dispatch<React.SetStateAction<boolean>>
): void => {
    setErrorRadio(false);
    setErrorInput(false);

    if(!!!formValue.deposito) {
        setErrorRadio(true);
    }
    if(!!!formValue.valor) {
        setErrorInput(true);
    }
}

export const isDeposito = (value: string | undefined): boolean => {
    return(
        !!value && value === "DEP"
            ? true
            : false
    )
}

export const getValor = (value: number | undefined): number => {
    return(
        !!value
            ? value
            : 0.0
    )
}