[![IBM Cloud powered][img-ibmcloud-powered]][url-ibmcloud]

# Watson Personality Insights
Aplicación que simula una herramienta que ayuda a pronosticar las características, las necesidades y los valores de la personalidad por medio de textos escritos. Ayuda a comprender los hábitos y las preferencias de los clientes a nivel individual y a escala.

[![IBM Personality Insights][img-pi]][url-pi] 
[![Demo Personality Insights][img-demopi]][url-demopi]

## Prework:
* Cuenta de [IBM Cloud][url-IBMCLOUD]
* Instalar [CLI de IBM Cloud][url-CLI-IBMCLOUD] 
* Cuenta en [GitHub][url-github-join]
* Instalar [CLI de GitHub][url-github-cli] o instalar [GitHub Desktop][url-githubdesktop]
* [NodeJS][url-node]
* Utilizar safari, chrome, firefox, edge


## Contenido

Empezaremos creando nuestro servicio dentro de IBM Cloud. Para esto, iremos a la parte de catalogo y buscaremos Personality Insihgts.

![](assets/im1.png)

![](assets/im2.png)


Seleccionamos la region mas cercana, la version **LITE**, lo nombramos, y le agregamos los **TAGS** necesarios, para finalizar le daremos click en crear.

![](assets/im3.png)

![](assets/im4.png)


Ya que estemos dentro de la pagina principal del servicio donde encontraremos más información de como implementarlo, damos click en **Service Credentials**. 

![](assets/im5.png)

Click en **View Credentials** para verlas y copiarlas, ya que lo usaremos mas adelante (en caso de que no se haya creado de manera automatica, podemos generar una con **New Credential+**)

![](assets/im6.png)

![](assets/im7.png)

Forkeamos y clonamos este repositorio.

![](assets/im8.png)

podemos usar en la terminal, estando en el escritorio

``` bash
git clone <url-del-repositorio>
```
Ya que este clonado, abrimos en el editor de texto de su elección **app.js** y en la linea 15 y 16 llenaremos los datos de la siguiente manera:

```js
username: 'apikey',
password: '<el valor que tenemos en las credenciales apikey>'
```
![](assets/im9.png)

## Ejecucion local

Ejecuta los siguientes comandos en la terminal, en la carpeta clonada:
``` bash
npm install
node app
```
Usa el link http://localhost:8080 para cargar la aplicacion web en el navegador.

# Datos importantes

Ya que se haga el llenado del formulario, nos pasara a la siguiente donde nos mostrara 5 caracteristicas de personalidad, pero en la terminal nos arrojara gracias a **Estructurador.js** toda la información que el servicio nos da. Es importante que el escrito contenga cierto numero de palabras, como se muestra a continuacion: 

* 3000 palabras son suficientes para conseguir la máxima precisión del servicio.
* Al menos 1200 palabras da como resultado un MAE que está dentro del dos por ciento del mejor MAE que puede devolver el servicio.
* Entre 600 y 1200 palabras da como resultado un MAE que está dentro del tres por ciento del mejor MAE que puede devolver el servicio.
* Menos de 600 palabras generan un aviso, pero el servicio sigue analizando la entrada.
* Menos de 100 palabras generan un error.


**Error absoluto medio promedio (MAE, Average Mean Absolute Error)**

[img-ibmcloud-powered]: https://img.shields.io/badge/IBM%20Cloud-Powered-blue.svg
[url-ibmcloud]: https://www.ibm.com/cloud/
[img-pi]: https://img.shields.io/badge/IBM%20Cloud-Personality%20Insights-blue.svg
[url-pi]: https://www.ibm.com/cloud/
[img-demopi]: https://img.shields.io/badge/DEMO-Watson%20Personality%20Insights-red.svg
[url-demopi]: https://personality-insights-demo.ng.bluemix.net/
[url-IBMCLOUD]: https://cloud.ibm.com/registration
[url-CLI-IBMCLOUD]: https://cloud.ibm.com/docs/cli/reference/ibmcloud?topic=cloud-cli-install-ibmcloud-cli
[url-github-join]: https://github.com/join
[url-github-cli]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[url-githubdesktop]: https://desktop.github.com/
[url-node]: https://nodejs.org/es/download/