import { useState } from "react";
import { Box, Button, Callout, Flex, TextField } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import styles from "./Login.module.css";

const LoginForm = () => {
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log({ usuario, contrasena });
    };

    const handleReset = () => {
        setUsuario("");
        setContrasena("");
    };

    return (
        <Box width="50%">
            <form onSubmit={handleSubmit}>
                <h2>LOGIN COLEGIO CEIC</h2>
                <Flex direction="column" gap="5">
                    <Box>
                        <label htmlFor="usuario"><b>Usuario de acceso</b></label>
                        <TextField.Root
                            size="3"
                            placeholder="Usuario"
                            id="usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </Box>
                    <Box>
                        <label htmlFor="contrasena"><b>Contraseña</b></label>
                        <TextField.Root
                            size="3"
                            placeholder="Contraseña"
                            id="contrasena"
                            type="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </Box>
                    <Button variant="solid" size="3" color="green">Ingresar</Button>
                    <Button type="button" color="crimson" variant="solid" size="3" onClick={handleReset}>Limpiar</Button>
                    <Flex align={"start"} gap={"2"} className={styles["target-info"]}>                        
                        <Callout.Icon><InfoCircledIcon /></Callout.Icon>
                        <span>
                            Si no recuerdas tus credenciales, comunícate con <b>Administración del colegio</b>
                        </span>
                    </Flex>
                </Flex>
            </form>
        </Box>
    );
};

export default LoginForm;
