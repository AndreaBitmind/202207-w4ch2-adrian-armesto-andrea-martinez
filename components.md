Los componentes: reciben, muestran, estado, acciones. Hay que difinir acada una de estas.

## APP

- muestra todos los componentes.
- recibe: nada.
- estado: estado palabra secreta, en juego/perdido/ganado, stage(cambia letra incorrecta), usedleters
- acciones: nada

## GuessLeters

- muestra: muestran letras acertadas, espacios, y palabra correcta
- recibe: letra correcta.
- accion: nada
- estado: nada

## Hangman

- muestra: svg Hangman
- recibe: accion, si la guessed letter es erronea
- estado: nada
- accion: nada

## Letters

- muestra: Todas letras abecedario
- recibe: actionOnclick
- estado: nada
- accion: Al clicar accion recibida.

## Result

- muestra: You ar death or you are alive.
- recibe: si gana(Your are alive) o pierde(You are death), o si está en juego(nada)
- estado: nada
- accion: nada

## UsedLeters

- muestra: Letras usdas
- recibe: letras usadas
- estado: nada
- acciones: nada
