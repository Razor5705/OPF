document.getElementById('promptForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const role = document.getElementById('role').value;
    const context = document.getElementById('context').value;
    const activity = document.getElementById('activity').value;
    const format = document.getElementById('format').value;
    const competency = document.getElementById('competency').value;
    const style = document.getElementById('style').value;
    const restrictions = document.getElementById('restrictions').value;
    
    // Validación de campos obligatorios
    if (!role || !activity || !format || !competency || !style) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    // Generar el prompt mejorado según las especificaciones
    let prompt = `PROMPT INDAGATORIO DE OPF DETECTIVES ANALISTAS

ROL DEL INVESTIGADOR: ${role}

CONTEXTO DETALLADO DEL CASO:
${context || 'No especificado'}

ACTIVIDAD PRIORITARIA A REALIZAR: ${activity}

FORMATO DE SALIDA REQUERIDO: ${format}

COMPETENCIA GENERAL A APLICAR: ${competency}

ESTILO DE INVESTIGACIÓN: ${style}`;

    if (restrictions) {
        prompt += `

RESTRICCIONES Y CRITERIOS ADICIONALES:
${restrictions}`;
    }

    prompt += `

INSTRUCCIONES ESPECÍFICAS PARA LA INVESTIGACIÓN:
- Desarrollar una investigación completa y profesional basada en el contexto proporcionado
- Aplicar metodologías específicas para ${activity}
- Priorizar el enfoque de ${style} en todo el proceso
- Garantizar que el formato de salida sea ${format} con estructura clara y profesional
- Incluir timeline de eventos, vínculos entre elementos y pistas accionables
- Basar todas las conclusiones en evidencias verificables y citables
- Considerar el marco legal y ético aplicable al caso
- Proporcionar recomendaciones prácticas y ejecutables
- Mantener la confidencialidad y ética profesional en todo momento

Por favor, proceda con la investigación siguiendo estos parámetros y entregue el resultado en el formato solicitado.`;
    
    // Mostrar el resultado
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
        btn.style.backgroundColor = '#2ecc71';
        
        setTimeout(function() {
            btn.textContent = originalText;
            btn.style.backgroundColor = '#27ae60';
        }, 2000);
    }).catch(function() {
        alert('No se pudo copiar al portapapeles. Por favor, selecciona y copia manualmente.');
    });
});