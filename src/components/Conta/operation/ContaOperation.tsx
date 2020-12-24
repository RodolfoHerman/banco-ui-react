import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    Box,
    Button,
    Card, 
    CardContent, 
    CardHeader, 
    FormControl, 
    FormControlLabel, 
    FormHelperText, 
    Radio, 
    RadioGroup, 
    TextField, 
    Typography, 
    withStyles 
} from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { updateConta } from '../../../services/Conta.service';
import { Conta } from '../Conta.model';
import { 
    getValor, 
    hasNoError, 
    isDeposito, 
    setErrors 
} from '../utils/conta.utils';

const ERROR_MESSAGE: string = "Campo obrigatório";

const styles = () => ({
    CardHeader: {
        borderBottom: "1px solid rgb(220,220,220)"
    },
    TypographyTitle: {
        textTransform: "uppercase" as "uppercase",
        fontWeight: 700,
        color: "#555"
    },
    FormControlInput: {
        marginTop: "10px"
    },
    BoxStyle: {
        marginTop: "10px",
        '& > *:not(:last-child)': {
            marginRight: "10px"
        }
    },
    ButtonBack: {
        backgroundColor: "#2196f3",
        color: "#FFF",
        '&:hover': {
            backgroundColor: "#2196f3",
            opacity: 0.7
        }
    },
    ButtonOperation: {
        backgroundColor: "#4caf50",
        color: "#FFF",
        '&:hover': {
            backgroundColor: "#4caf50",
            opacity: 0.7
        }
    }
});

const operationOptions: Array<{label: string, value: string}> = [
    {label: "Depósito", value: "DEP"},
    {label: "Saque", value: "SAQ"}
];

declare interface ContaOperationProps {
    classes?: {
        [seletor: string]: string
    },
    conta: Conta
}

export interface ContaDTO {
    deposito: string | undefined,
    valor: number | undefined,
}

const ContaOperation: React.FC<ContaOperationProps> = (props) => {
    const initialState: ContaDTO = {
        deposito: undefined,
        valor: undefined
    } 
    
    const [errorRadio, setErrorRadio] = useState<boolean>(false);
    const [errorInput, setErrorInput] = useState<boolean>(false);
    const [radioValue, setRadioValue] = useState<string>('');
    const [formValue, setFormValue] = useState<ContaDTO>(initialState);
    const history = useHistory();
    const showAlertError = (errorMsg: string = 'Campos obrigatórios devem ser preenchidos!') => Swal.fire('Ooops!', errorMsg, 'error');
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setErrors(formValue, setErrorRadio, setErrorInput);

        if(hasNoError(formValue)) {
            try {
                await updateConta({
                    ...props.conta,
                    valor: getValor(formValue.valor),
                    deposito: isDeposito(formValue.deposito)
                });

                Swal.fire(':D', 'Operação realizada com sucesso!', 'success');
                history.goBack();

            } catch (e) {
                showAlertError('Não foi possível realizar a operação');
            }
        } else {
            showAlertError();
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        
        if(name === "deposito") {
            setRadioValue(value);
        }

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    return(
        <Card elevation={3}>
            <CardHeader
                className={props.classes?.CardHeader}
                title={
                    <Typography
                        className={props.classes?.TypographyTitle}
                    >
                        Realizar Operação Bancária
                    </Typography>
                }
            />
            <CardContent>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <FormControl component="fieldset" error={errorRadio}>
                        <RadioGroup 
                            aria-label="operação" 
                            name="deposito"
                            value={radioValue}
                            onChange={handleChange}
                        >
                            {
                                operationOptions.map(option => 
                                    <FormControlLabel 
                                        key={option.value}
                                        value={option.value} 
                                        control={<Radio />} 
                                        label={option.label}
                                    />    
                                )
                            }
                        </RadioGroup>
                        <FormHelperText>
                            {
                                errorRadio
                                    && ERROR_MESSAGE
                            }
                        </FormHelperText>
                    </FormControl>
                    <FormControl 
                        fullWidth 
                        component="fieldset" 
                        error={errorInput}
                        className={props.classes?.FormControlInput}
                    >
                        <TextField 
                            name="valor"
                            label="Valor R$" 
                            variant="outlined" 
                            error={errorInput}
                            onChange={handleChange}
                        />
                        <FormHelperText>
                            {
                                errorInput
                                    && ERROR_MESSAGE
                            }
                        </FormHelperText>
                        <Box 
                            display="flex" 
                            justifyContent="flex-end"
                            alignContent="space-around"
                            className={props.classes?.BoxStyle}
                        >
                            <Button
                                onClick={history.goBack}
                                variant="contained"
                                className={props.classes?.ButtonBack}
                                startIcon={
                                    <FontAwesomeIcon
                                        icon="arrow-circle-left"
                                    />
                                }
                            >
                                Voltar
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                className={props.classes?.ButtonOperation}
                                startIcon={
                                    <FontAwesomeIcon
                                        icon="credit-card"
                                    />
                                }
                            >
                                Realizar operação
                            </Button>
                        </Box>
                    </FormControl>
                </form> 
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(ContaOperation);
