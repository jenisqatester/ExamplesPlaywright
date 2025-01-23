# Introducción 
Este proyecto se ha creado para montar una prueba de concepto de como comenzar a relizar las pruebas end to end o API para XXXXXXX usando Playwright.

Playwright es una herramienta de automatización de pruebas de código abierto desarrollada por Microsoft. Está diseñada para automatizar navegadores web modernos, como Chromium, Firefox y WebKit, y permite realizar pruebas de aplicaciones web de extremo a extremo (E2E).

Playwright admite múltiples lenguajes de programación, incluidos JavaScript, TypeScript, Python, C# y Java.

Se utiliza principalmente para realizar pruebas funcionales, validar la interfaz de usuario y las interacciones del usuario, así como para pruebas de APIs REST y aplicaciones progresivas (PWAs).

Algunas características que incluye Playwright:

1. Compatibilidad con múltiples navegadores:
  * Soporta Chromium (incluido Google Chrome y Microsoft Edge), Firefox y WebKit (el motor detrás de Safari).
  * Permite realizar pruebas cruzadas en diferentes navegadores con el mismo código.
2. Compatibilidad con múltiples navegadores:
  * Playwright gestiona automáticamente las esperas dinámicas, sincronizándose con la interfaz de usuario (espera a que los elementos estén visibles, habilitados o animaciones terminadas).
3. Soporte para múltiples lenguajes:
  * Funciona con JavaScript, TypeScript, Python, C# y Java.
4. Paralelización de pruebas:
  * Ejecuta pruebas en paralelo de manera eficiente para reducir el tiempo total de ejecución..
5. Modo headless y headed:
  * Permite ejecutar las pruebas en modo headless (sin interfaz gráfica) o en modo headed para depurar visualmente.
6. Captura avanzada:
  * Ofrece la capacidad de grabar videos, tomar capturas de pantalla y generar trazas completas de las pruebas, lo que facilita la depuración.
7. Pruebas de API:
  * Permite probar directamente las APIs REST además de las pruebas de interfaz gráfica.
8. Pruebas móviles:
  * Soporta emulación de dispositivos móviles, incluidos gestos táctiles y vistas específicas de dispositivos.
9. Integración con CI/CD:
  * Es compatible con herramientas de integración continua como Jenkins, GitHub Actions, Azure Pipelines, entre otras.
10. Grabador de código::
  * Incluye una herramienta para grabar interacciones y generar código automáticamente.




En resumen, el objetivo de este proyecto es un entorno donde desarrollaremos y ejecutaremos las pruebas automatizadas para garantizar y fiabilidad de XXXXXXX.

# Tareas iniciales antes de clonar el repositorio
1. Instalación de Git (en caso de no tenerlo).
 * Descarga e instala Git según tu sistema operativo.
 * Configurar usuario y correo electrónico:
     * Abre tu terminal
     * Ejecuta los siguientes comandos:
        git config --global user.name "YYYYYYYYYYY"
        git config --global user.mail YYYYYYYYYYY@babelgroup.com
 * Verificar Configuración
     Ejecutando git config --list para confirmar que la configuración se ha aplicado correctamente.

2. Instalacion de Visual Studio Code.
   Descarga e instala Visual Studio Code desde Internet

3. Instalación de Node.js y NPM
 * Descarga e instala Node.js desde Internet. Este es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript fuera de un navegador web.
 * Verificar la instalación de Node.js y NPM
    Abre tu terminal
    Ejecuta node --version para verificar la versión de Node.js
    Ejecuta npm -v para verificar la versión de npm

4. Procedemos a clonar el repositorio https://github.com/jenisqatester/ExamplesPlaywright 

# Tareas posteriores despues de clonar el repositorio
1. Una vez clonado el repositorio abres la carpeta del repositorio clonado con VSCode.
2. Instalar Cypress:
   Abre tu terminal desde VSCode
   Ejecuta el siguiente comando: npm install y npx playwright install para instalar las dependencias y los navegadores requeridos por Playwright.
3. Verfica la instalación de playwright ejecutando npm list @playwright/test
4. Para ejecutar los casos de pruebas, utiliza el siguiente comando: npx playwright test y un archivo especifico npx playwright test tests/navegacion.spec.js.

# Estructura de Carpeta del proyecto
1. data: Utilizado para cargar información desde archivos externos a las pruebas.
2. tests: Donde se escriben las pruebas.
3. package.lock.json: Archivo que permite recuperar todas las dependencial de playwright


# Compilación y prueba
Antes de realizar un commit en el repositorio, es una práctica recomendada ejecutar las pruebas en tu entorno localhost para asegurarte de que todo funcione correctamente. Este paso garantiza que los cambios que estás a punto de enviar al repositorio no introduzcan errores en el código existente y que mantengan la integridad y la estabilidad del proyecto.

Para llevar a cabo esta verificación, sigue estos pasos:

1. Asegúrate de tener un entorno de desarrollo funcional: Antes de ejecutar las pruebas, verifica que tu entorno de desarrollo esté configurado correctamente y que la aplicación se ejecute sin problemas localmente.

2. Actualiza tu rama local: Si estás trabajando en una rama separada, asegúrate de actualizarla con la rama principal del repositorio antes de ejecutar las pruebas. Esto te permitirá probar tus cambios en un contexto actualizado.

3. Ejecuta las pruebas automatizadas: Utiliza el marco de pruebas automatizadas definido en el proyecto (por ejemplo, playwright, Jest, Selenium, etc.) para ejecutar las pruebas relevantes.

4. Verifica los resultados de las pruebas: Después de que las pruebas se completen, revisa los resultados para asegurarte de que todas las pruebas pasaron satisfactoriamente. Presta especial atención a cualquier prueba que haya fallado y asegúrate de comprender la causa raíz del problema.

5. Corrige cualquier problema identificado: Si alguna prueba falló o se encontraron problemas durante la ejecución de las pruebas, trabaja para solucionar estos problemas antes de continuar con el commit. Esto podría implicar la corrección de errores en el código, la actualización de las pruebas para reflejar los cambios realizados o la coordinación con otros miembros del equipo para resolver problemas de integración.

6. Confirma tus cambios: Una vez que estés seguro de que todas las pruebas han pasado y que tus cambios son sólidos, puedes proceder a realizar el commit en tu rama local. Asegúrate de incluir un mensaje descriptivo que explique los cambios realizados y el propósito del commit.

7. Luego realiza una pull request para solicitar una revisión de código de las pruebas a otro miembro del equipo QA. Esta pull request contiene los cambios necesarios para [describir brevemente las pruebas generadas]. Siempre antes de que se fusionen estos cambios en la rama principal (master), sería muy valioso contar una revisión por parte de otro miembro del equipo QA.


Siguiendo estos pasos, puedes garantizar que tus cambios sean revisados de manera efectiva y que se mantenga la calidad del código en el repositorio. Esto contribuye a la estabilidad y confiabilidad del proyecto a largo plazo.

# Contribución
¡Gracias por tu interés en contribuir al proyecto playwright de XXXXXXXX!
playwright es una herramienta de pruebas de extremo a extremo para aplicaciones web modernas que apunta a mejorar la calidad y la eficienca del desarrollo de software.


# Finalmente
Siguiendo estos pasos, deberías tener configurado tu entorno de desarrollo local de playwright correctamente.