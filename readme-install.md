# 📦 OPF INTELIGENCIA - Paquete de Instalación

## 🎯 Contenido del Paquete

Este paquete contiene:
1. `opf-sistema.html` - Programa principal
2. `OPF Sistema.bat` - Lanzador para Windows
3. `OPF Sistema.command` - Lanzador para macOS
4. `config.js` - Archivo de configuración rápida (opcional)
5. `README.md` - Este archivo de instrucciones

## 💻 INSTALACIÓN EN WINDOWS

### Método 1: Usar el ejecutable .bat
1. Descarga todos los archivos en una carpeta
2. Asegúrate de que `opf-sistema.html` y `OPF Sistema.bat` estén en la misma carpeta
3. Doble clic en `OPF Sistema.bat`
4. El sistema se abrirá automáticamente en tu navegador

### Método 2: Abrir directamente
1. Doble clic en `opf-sistema.html`
2. Se abrirá en tu navegador predeterminado

### Crear acceso directo en el escritorio:
1. Clic derecho en `OPF Sistema.bat`
2. Selecciona "Enviar a" → "Escritorio (crear acceso directo)"
3. Opcional: Cambia el icono del acceso directo

## 🍎 INSTALACIÓN EN macOS

### Configuración inicial (solo primera vez):
1. Descarga todos los archivos en una carpeta
2. Abre Terminal (Aplicaciones → Utilidades → Terminal)
3. Navega a la carpeta donde guardaste los archivos:
   ```bash
   cd ~/Downloads/opf-sistema
   ```
4. Da permisos de ejecución:
   ```bash
   chmod +x "OPF Sistema.command"
   ```

### Usar el sistema:
1. Doble clic en `OPF Sistema.command`
2. Si macOS bloquea la ejecución:
   - Ve a Preferencias del Sistema → Seguridad y Privacidad
   - Haz clic en "Abrir de todas formas"
3. El sistema se abrirá en tu navegador

### Método alternativo:
1. Simplemente haz doble clic en `opf-sistema.html`

## 🎨 PERSONALIZACIÓN RÁPIDA

### Opción 1: Editar config.js
1. Abre `config.js` con cualquier editor de texto
2. Modifica los valores:
   ```javascript
   SYSTEM_NAME: "Mi Sistema",
   PRIMARY_COLOR: "#ff6b6b",
   ```
3. Guarda el archivo
4. Abre el sistema - los cambios se aplicarán automáticamente

### Opción 2: Editar el HTML directamente
1. Abre `opf-sistema.html` con un editor de texto
2. Busca `SYSTEM_CONFIG` al principio del archivo
3. Modifica los valores que necesites
4. Guarda y vuelve a abrir

## 📁 ESTRUCTURA RECOMENDADA

```
OPF-Sistema/
├── opf-sistema.html        (programa principal)
├── OPF Sistema.bat         (lanzador Windows)
├── OPF Sistema.command     (lanzador macOS)
├── config.js              (configuración opcional)
├── logo.png               (tu logo - opcional)
└── README.md              (instrucciones)
```

## 🚀 USO RÁPIDO

### Windows:
- **Abrir**: Doble clic en `OPF Sistema.bat`
- **Cerrar**: Cerrar la ventana del navegador

### macOS:
- **Abrir**: Doble clic en `OPF Sistema.command`
- **Cerrar**: Cerrar la ventana del navegador

### Linux:
- **Abrir**: Doble clic en `opf-sistema.html`
- O desde terminal: `xdg-open opf-sistema.html`

## ⚙️ SOLUCIÓN DE PROBLEMAS

### El .bat no funciona en Windows:
1. Verifica que `opf-sistema.html` esté en la misma carpeta
2. Prueba hacer clic derecho → "Ejecutar como administrador"
3. Si no funciona, abre directamente el archivo HTML

### El .command no funciona en macOS:
1. Asegúrate de haber dado permisos con `chmod +x`
2. Si macOS lo bloquea, ve a Seguridad y Privacidad
3. Como alternativa, abre directamente el HTML

### No se guardan los datos:
1. Verifica que tu navegador permita localStorage
2. No uses modo incógnito/privado
3. Algunos navegadores requieren que el archivo esté en un servidor local

### Servidor local (opcional):
Si necesitas funciones avanzadas, puedes usar un servidor local:

**Python (Windows/Mac/Linux):**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npx http-server
```

Luego abre: `http://localhost:8000/opf-sistema.html`

## 🔒 SEGURIDAD

- El sistema funciona completamente offline
- No envía datos a ningún servidor
- Los datos se guardan localmente en tu navegador
- No requiere instalación ni permisos especiales

## 📝 NOTAS

- Compatible con Chrome, Firefox, Edge, Safari (versiones actuales)
- Resolución mínima recomendada: 1024x768
- El sistema guarda automáticamente tu progreso
- Puedes tener múltiples copias con diferentes configuraciones

## 💡 TIPS

1. **Múltiples versiones**: Duplica la carpeta para tener diferentes configuraciones
2. **Backup**: Exporta regularmente tu historial desde el navegador
3. **Personalización**: Usa `config.js` para cambios rápidos sin editar el HTML
4. **Acceso rápido**: Crea un marcador en tu navegador

## 📧 SOPORTE

Si encuentras problemas:
1. Verifica que todos los archivos estén completos
2. Prueba con otro navegador
3. Revisa la consola del navegador (F12) para ver errores

---

**Versión**: 10.0  
**Última actualización**: 2024  
**Sistema**: OPF INTELIGENCIA