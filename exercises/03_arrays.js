// 3. Arrays
    // Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.

        /* const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        
        console.log(meses[5]);
        console.log(meses[11]); */

    // b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

            /* const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            console.log(meses.sort()); */

    // c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

            /* const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            const principio = meses.unshift("PrincipioMes")
            const final = meses.push("FInalMes")
            console.log(meses) */

    // d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

            /* const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            const principio = meses.shift("enero")
            const final = meses.pop("diciembre")
            console.log(meses) */

    // e) Invertir el orden del array (utilizar reverse).

            /* const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            const invertir = meses.reverse()
            console.log(meses) */

    // f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

            /* const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            console.log(meses.join("-")) */

    // g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

            /* const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            const trozo = meses.slice(4, 11)
            console.log(trozo) */