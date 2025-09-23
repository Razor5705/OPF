document.getElementById('promptForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const role = document.getElementById('role').value;
    const context = document.getElementById('context').value;
    const activity = document.getElementById('activity').value;
    const format = document.getElementById('format').value;
    const competency = document.getElementById('competency').value;
    const restrictions = document.getElementById('restrictions').value;
    
    if (!role || !activity || !format || !competency) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    let prompt = `Actúa como un ${role} experto con especialización en ${competency.toLowerCase()}.

CONTEXTO DE LA INVESTIGACIÓN:
${context || 'No especificado'}

TAREA PRINCIPAL:
Necesito que desarrolles una ${activity.toLowerCase()} y me proporciones el resultado en formato de ${format.toLowerCase()}.

COMPETENCIA CLAVE A APLICAR:
Enfócate especialmente en aplicar tu expertise en ${competency.toLowerCase()} para abordar esta investigación de manera profesional y efectiva.

FORMATO REQUERIDO:
Estructura tu respuesta como ${format.toLowerCase()}, asegurándote de que sea clara, profesional y utilizable en un contexto investigativo real.`;

    if (restrictions) {
        prompt += `

RESTRICCIONES Y CONSIDERACIONES:
${restrictions}`;
    }

    prompt += `

INSTRUCCIONES ADICIONALES:
- Mantén la confidencialidad y ética profesional en todo momento
- Basa tus recomendaciones en mejores prácticas del sector
- Considera aspectos legales y regulatorios aplicables
- Proporciona información práctica y accionable
- Si requieres información adicional, especifica qué datos necesitas

Por favor, procede con la ${activity.toLowerCase()} siguiendo estos parámetros.`;
    
    document.getElementById('generatedPrompt').textContent = prompt;
    document.getElementById('resultSection').style.display = 'block';
    
    // Scroll automático al resultado
    document.getElementById('resultSection').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const prompt = document.getElementById('generatedPrompt').textContent;
    
    navigator.clipboard.writeText(prompt).then(function() {
        const btn = document.getElementById('copyBtn');
        const originalText = btn.textContent;
        btn.textContent = '✅ Copiado!';
        btn.style.background = 'rgba(0, 255, 0, 0.3)';
        btn.style.borderColor = '#00ff00';
        btn.style.color = '#00ff00';
        
        setTimeout(function() {
            btn.textContent = originalText;
            btn.style.background = 'rgba(255, 215, 0, 0.2)';
            btn.style.borderColor = '#ffd700';
            btn.style.color = '#ffd700';
        }, 2000);
    }).catch(function() {
        alert('No se pudo copiar al portapapeles. Por favor, selecciona y copia manualmente.');
    });
});
