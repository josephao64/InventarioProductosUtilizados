let reportPDF; // Define reportPDF globalmente

// Lista de productos con sus unidades y categorías
const products = [
    { name: "Salami Ahumado", unit: "Unidad", category: "Carnes" },
    { name: "Pizza Cheese Rallado 20 lbs", unit: "Libra", category: "Quesos" },
    { name: "Jamón Tipo Pizza Granel", unit: "Unidad", category: "Carnes" },
    { name: "Pepperoni", unit: "Libra", category: "Carnes" },
    { name: "Tocino Rebanado Ahumado", unit: "Unidad", category: "Carnes" },
    { name: "Champiñones", unit: "Unidad", category: "Vegetales" },
    { name: "Pasta de Tomate", unit: "Unidad", category: "Salsas" },
    { name: "Salsa para Pizza", unit: "Unidad", category: "Salsas" },
    { name: "Pizza Cheese Block 5 lbs", unit: "Libra", category: "Quesos" },
    { name: "Toping de Res", unit: "Unidad", category: "Carnes" },
    { name: "Jamón Roast 1.25 lb", unit: "1.25 Libras", category: "Carnes" },
    { name: "Queso Parmesano 2.4 lb", unit: "2.4 Libras", category: "Quesos" },
    { name: "Queso Lac Procesado 3 lb", unit: "3 Libras", category: "Quesos" },
    { name: "Queso Mozzarella 2 lb", unit: "2 Libras", category: "Quesos" },
    { name: "Papas Valley", unit: "Unidad", category: "Vegetales" },
    { name: "Queso Mex", unit: "Libras", category: "Quesos" },
    { name: "Queso Cheddar 3 lb", unit: "3 Libras", category: "Quesos" },
    { name: "Queso Mozarella", unit: "Libras", category: "Quesos" },
    { name: "Queso Blok", unit: "Barras", category: "Quesos" },
    { name: "Jamón", unit: "Libras", category: "Carnes" },
    { name: "Tocino", unit: "Libras", category: "Carnes" },
    { name: "Carne Roast", unit: "Bolsas", category: "Carnes" },
    { name: "Tomate Deshidratado", unit: "Botes", category: "Vegetales" },
    { name: "Salsa Chicharronera", unit: "Botes", category: "Salsas" },
    { name: "Mezcla de 5 Quesos", unit: "Bolsas", category: "Quesos" },
    { name: "Carne de Res", unit: "Bolsas", category: "Carnes" },
    { name: "Carne Pas Chili", unit: "Bolsas", category: "Carnes" },
    { name: "Azúcar", unit: "Libra", category: "Otros" },
    { name: "Azúcar Fina", unit: "Bolsas", category: "Otros" },
    { name: "Picante", unit: "Unidad", category: "Condimentos" },
    { name: "Sazonador 793.8 gramos", unit: "Unidad", category: "Condimentos" },
    { name: "Ketchup", unit: "2 Cajas", category: "Salsas" },
    { name: "Salsa LA 907 g", unit: "Unidad", category: "Salsas" },
    { name: "Salsa para Finger", unit: "Botes", category: "Salsas" },
    { name: "Polvo Rojo", unit: "Bolsas", category: "Condimentos" },
    { name: "Pimienta Rojo", unit: "2 Cajas", category: "Condimentos" },
    { name: "Pimienta Verde", unit: "Cajas", category: "Condimentos" },
    { name: "Canela", unit: "Botes", category: "Condimentos" },
    { name: "Pimienta sobre BOPP transparente", unit: "0.5 gramos", category: "Condimentos" },
    { name: "Chile sobre BOPP transparente", unit: "0.5 gramos", category: "Condimentos" },
    { name: "Aderezo Ranch 3.78 L / 128 oz", unit: "Unidad", category: "Salsas" },
    { name: "Mostaza", unit: "Unidad", category: "Salsas" },
    { name: "Sal", unit: "Libra", category: "Condimentos" },
    { name: "Mayonesa Unidad 200 g", unit: "Unidad", category: "Salsas" },
    { name: "Chimichurri", unit: "Bolsas", category: "Salsas" },
    { name: "Cebolla Morada Libra", unit: "Libra", category: "Vegetales" },
    { name: "Cebolla Blanca Libra", unit: "Libra", category: "Vegetales" },
    { name: "Arándanos Bolsa 1.36 kg / 48 oz", unit: "Unidad", category: "Frutas" },
    { name: "Arúgula Bolsa 227 g / 8 oz", unit: "Unidad", category: "Vegetales" },
    { name: "Aguacate Express 2 Unidades 1 lb", unit: "2 Unidad", category: "Frutas" },
    { name: "Lechuga Romana Bolsa 227 g / 8 oz", unit: "Bolsa", category: "Vegetales" },
    { name: "Tomate Cherry 567 g / 1.25 lb", unit: "1.25 Libras", category: "Vegetales" },
    { name: "Tomate", unit: "5 Libras", category: "Vegetales" },
    { name: "Fresas Bolsa 5 lb", unit: "Libra", category: "Frutas" },
    { name: "Fresas", unit: "Bolsas", category: "Frutas" },
    { name: "Chile Jalapeño", unit: "Unidad", category: "Vegetales" },
    { name: "Chile Pimiento Verde", unit: "Unidad", category: "Vegetales" },
    { name: "Chile Pimiento Rojo", unit: "Unidad", category: "Vegetales" },
    { name: "Champiñones", unit: "Unidad", category: "Vegetales" },
    { name: "Piña", unit: "Unidad", category: "Frutas" },
    { name: "Piñas", unit: "Unidades", category: "Frutas" },
    { name: "Piñas Verdes", unit: "Unidades", category: "Frutas" },
    { name: "Tomate Seco Botella 907 gramos", unit: "Unidad", category: "Vegetales" },
    { name: "Limón", unit: "Libra", category: "Frutas" },
    { name: "Pitahaya", unit: "Bolsas", category: "Frutas" },
    { name: "Harina Panqueques", unit: "Unidad", category: "Otros" },
    { name: "Harina Trigo Saco 50 lbs", unit: "Saco 50 Libras", category: "Otros" },
    { name: "Aceite", unit: "Canecas", category: "Otros" },
    { name: "Asistin", unit: "Galones", category: "Otros" },
    { name: "Garrafón de Agua", unit: "Unidad", category: "Otros" },
    { name: "Vasos Caja 200 Unidades 236 ml / 8 oz", unit: "Caja", category: "Suministros" },
    { name: "Vasos Desechables", unit: "Paquetes", category: "Suministros" },
    { name: "Toalla de Papel Paquete 3 Unidades / 170 m", unit: "Paquete", category: "Suministros" },
    { name: "Papel para Manos", unit: "Paquetes", category: "Suministros" },
    { name: "Bolsa Basura Caja 50 Unidades 208 L", unit: "Caja", category: "Suministros" },
    { name: "Bolsas para Basura (55 galones)", unit: "Cajas", category: "Suministros" },
    { name: "Bolsas para Basura (33 galones)", unit: "Cajas", category: "Suministros" },
    { name: "Bolsas para Basura Extra Grande", unit: "Rollos", category: "Suministros" },
    { name: "Bolsas para Basura Medianas", unit: "Rollos", category: "Suministros" },
    { name: "Cajas para Canelitas", unit: "Paquetes", category: "Suministros" },
    { name: "Caja Fingers", unit: "Caja 50 Unidades", category: "Suministros" },
    { name: "Caja Pizza", unit: "Caja 50 Unidades", category: "Suministros" },
    { name: "Leche Descremada", unit: "Cajas", category: "Suministros" },
    { name: "Leche Entera", unit: "Cajas", category: "Suministros" },
    { name: "Leche Deslactosada", unit: "Cajas", category: "Suministros" },
    { name: "Agua Dulce", unit: "Galones", category: "Suministros" },
    { name: "Bolsas de Papel Kraft", unit: "Unidades", category: "Suministros" },
    { name: "Servilleta Nuve Blanca 6 Unidades / 300", unit: "Caja", category: "Suministros" },
    { name: "Servilletas", unit: "Paquetes", category: "Suministros" },
    { name: "Limpia Vidrios", unit: "Unidad", category: "Limpieza" },
    { name: "Detergente", unit: "Caja", category: "Limpieza" },
    { name: "Desinfectante Fabuloso Caja 2 Unidades / 5 L", unit: "Unidad", category: "Limpieza" },
    { name: "Jabón Líquido", unit: "Unidad", category: "Limpieza" },
    { name: "Jabón para Platos 2.66 L / 90 oz", unit: "Unidad", category: "Limpieza" },
    { name: "Pastilla para Baño", unit: "Unidad", category: "Limpieza" },
    { name: "Aromatizante", unit: "Paquete", category: "Limpieza" },
    { name: "Bolsas de Basura 55 Gall", unit: "Paquete", category: "Limpieza" },
    { name: "Bolsas de Basura 11 Gall", unit: "Paquete", category: "Limpieza" },
    { name: "Papel de Baño", unit: "Unidad", category: "Limpieza" },
    { name: "Raid", unit: "Unidad", category: "Limpieza" },
    { name: "Scotch Esponja", unit: "Unidad", category: "Limpieza" },
    { name: "Esponja de Alambre", unit: "Unidad", category: "Limpieza" },
    { name: "Jabón de Bola", unit: "Unidad", category: "Limpieza" },
    { name: "Cloro Galón", unit: "Unidad", category: "Limpieza" },
    { name: "Toalla de Manos", unit: "Unidad", category: "Limpieza" },
    { name: "Alcohol Líquido", unit: "Unidad", category: "Limpieza" },
    { name: "Trapeadores", unit: "Unidad", category: "Limpieza" },
    { name: "Trapeadores", unit: "Caja", category: "Limpieza" },
    { name: "Toallas para Limpiar Mesas", unit: "Unidad", category: "Limpieza" },
    { name: "Escobas", unit: "Unidad", category: "Limpieza" },
    { name: "Ajax Caja 4 Unidades / 600 g", unit: "Caja", category: "Limpieza" },
    { name: "Cuaderno", unit: "Unidad", category: "Papelería" },
    { name: "Lapiceros", unit: "Unidad", category: "Papelería" },
    { name: "Marcadores", unit: "Unidad", category: "Papelería" }
];

window.onload = function() {
    const productForm = document.getElementById('product-form');

    // Crear un formulario dinámico para cada producto
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productTitle = document.createElement('h2');
        productTitle.textContent = product.name;
        productDiv.appendChild(productTitle);

        // Etiqueta y campo para la presentación del producto
        const labelPresentation = document.createElement('label');
        labelPresentation.setAttribute('for', `presentation${index + 1}`);
        labelPresentation.textContent = 'Presentación:';
        productDiv.appendChild(labelPresentation);

        const inputPresentation = document.createElement('input');
        inputPresentation.type = 'text';
        inputPresentation.id = `presentation${index + 1}`;
        inputPresentation.placeholder = 'Ej. Caja (24 unidades) / Botella (500 ml)';
        productDiv.appendChild(inputPresentation);

        // Etiqueta y campo para la cantidad utilizada por semana
        const labelQuantity = document.createElement('label');
        labelQuantity.setAttribute('for', `quantity${index + 1}`);
        labelQuantity.textContent = 'Cantidad utilizada por semana:';
        productDiv.appendChild(labelQuantity);

        const inputQuantity = document.createElement('input');
        inputQuantity.type = 'number';
        inputQuantity.id = `quantity${index + 1}`;
        productDiv.appendChild(inputQuantity);

        // Contenedor para el checkbox de "no utilizado"
        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'checkbox-container';

        const inputNotUsed = document.createElement('input');
        inputNotUsed.type = 'checkbox';
        inputNotUsed.id = `not-used${index + 1}`;
        inputNotUsed.setAttribute('onchange', `toggleProductFields(${index + 1})`);
        checkboxContainer.appendChild(inputNotUsed);

        const labelNotUsed = document.createElement('label');
        labelNotUsed.setAttribute('for', `not-used${index + 1}`);
        labelNotUsed.textContent = 'Seleccione si no utiliza el producto';
        checkboxContainer.appendChild(labelNotUsed);

        productDiv.appendChild(checkboxContainer);

        // Agregar el contenedor del producto al formulario
        productForm.appendChild(productDiv);
    });
};

// Función para habilitar/deshabilitar campos según el estado del checkbox
function toggleProductFields(productNumber) {
    const notUsedCheckbox = document.getElementById(`not-used${productNumber}`);
    const presentationField = document.getElementById(`presentation${productNumber}`);
    const quantityField = document.getElementById(`quantity${productNumber}`);
    const fieldsDisabled = notUsedCheckbox.checked;

    presentationField.disabled = fieldsDisabled;
    quantityField.disabled = fieldsDisabled;

    if (fieldsDisabled) {
        presentationField.value = '';
        quantityField.value = '';
        presentationField.classList.remove('error');
        quantityField.classList.remove('error');
    }
}

// Función para generar el reporte en PDF
function generateReport() {
    const { jsPDF } = window.jspdf;

    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    const doc = new jsPDF();

    // Obtener la sucursal seleccionada
    const branch = document.getElementById('branch-select').value;
    doc.setFontSize(16);
    doc.text(`Reporte Semanal de Productos Consumidos Pizzería - ${branch}`, 10, 10);
    doc.setFontSize(12);

    // Encabezados de la tabla
    let tableData = [
        ["Producto", "Presentación", "Cantidad utilizada por semana", "Categoría"]
    ];

    let isValid = true;

    // Recorrer los productos y agregar filas a la tabla
    products.forEach((product, index) => {
        const presentation = document.getElementById(`presentation${index + 1}`);
        const quantity = document.getElementById(`quantity${index + 1}`);
        const notUsed = document.getElementById(`not-used${index + 1}`).checked;

        // Validar que los campos no estén vacíos si el producto se utiliza
        if (!notUsed && !presentation.value.trim()) {
            presentation.classList.add('error');
            isValid = false;
        } else {
            presentation.classList.remove('error');
        }

        if (!notUsed && !quantity.value.trim()) {
            quantity.classList.add('error');
            isValid = false;
        } else {
            quantity.classList.remove('error');
        }

        // Agregar datos a la tabla
        if (notUsed) {
            tableData.push([product.name, "Este producto no se utiliza", "-", product.category]);
        } else {
            tableData.push([product.name, presentation.value, quantity.value, product.category]);
        }
    });

    // Mostrar mensaje de error si hay campos vacíos
    if (!isValid) {
        errorMessage.textContent = "Por favor, completa todos los campos requeridos.";
        return;
    }

    // Generar la tabla en el PDF
    doc.autoTable({
        head: [tableData[0]],
        body: tableData.slice(1),
        styles: {
            fontSize: 11,
            cellPadding: 3,
            halign: 'center',
            valign: 'middle'
        },
        headStyles: {
            fillColor: [240, 240, 240],
            textColor: 0,
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245]
        }
    });

    reportPDF = doc;
}

// Función para descargar el reporte en PDF
function downloadReport() {
    if (!reportPDF) {
        generateReport();
    }
    reportPDF.save("reporte_productos.pdf");
}

// Función para compartir el reporte en PDF
function shareReport() {
    if (!reportPDF) {
        generateReport();
    }
    const pdfOutput = reportPDF.output('blob');
    const file = new File([pdfOutput], "reporte_productos.pdf", {
        type: "application/pdf"
    });

    // Verificar si el navegador soporta la función de compartir archivos
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({
            title: 'Reporte de Productos',
            files: [file]
        }).catch(error => console.error('Error al compartir:', error));
    } else {
        alert("La función de compartir no es compatible con su navegador.");
    }
}
