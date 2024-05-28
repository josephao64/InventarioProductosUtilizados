let reportPDF;

const products = [
    { name: "Salami Ahumado", unit: "Unidad" },
    { name: "Pizza Cheese Rallado 20 lbs", unit: "Libra" },
    { name: "Jamón Tipo Pizza Granel", unit: "Unidad" },
    { name: "Pepperoni", unit: "Libra" },
    { name: "Tocino Rebanado Ahumado", unit: "Unidad" },
    { name: "Champiñones", unit: "Unidad" },
    { name: "Pasta de Tomate", unit: "Unidad" },
    { name: "Salsa para Pizza", unit: "Unidad" },
    { name: "Pizza Cheese Block 5 lbs", unit: "Libra" },
    { name: "Toping de Res", unit: "Unidad" },
    { name: "Jamón Roast 1.25 lb", unit: "1.25 Libras" },
    { name: "Queso Parmesano 2.4 lb", unit: "2.4 Libras" },
    { name: "Queso Lac Procesado 3 lb", unit: "3 Libras" },
    { name: "Queso Mozzarella 2 lb", unit: "2 Libras" },
    { name: "Papas Valley", unit: "Unidad" },
    { name: "Queso Mex", unit: "Libras" },
    { name: "Queso Cheddar 3 lb", unit: "3 Libras" },
    { name: "Queso Mozarella", unit: "Libras" },
    { name: "Queso Blok", unit: "Barras" },
    { name: "Jamón", unit: "Libras" },
    { name: "Tocino", unit: "Libras" },
    { name: "Carne Roast", unit: "Bolsas" },
    { name: "Tomate Deshidratado", unit: "Botes" },
    { name: "Salsa Chicharronera", unit: "Botes" },
    { name: "Mezcla de 5 Quesos", unit: "Bolsas" },
    { name: "Carne de Res", unit: "Bolsas" },
    { name: "Carne Pas Chili", unit: "Bolsas" },
    { name: "Azúcar", unit: "Libra" },
    { name: "Azúcar Fina", unit: "Bolsas" },
    { name: "Picante", unit: "Unidad" },
    { name: "Sazonador 793.8 gramos", unit: "Unidad" },
    { name: "Ketchup", unit: "2 Cajas" },
    { name: "Salsa LA 907 g", unit: "Unidad" },
    { name: "Salsa para Finger", unit: "Botes" },
    { name: "Polvo Rojo", unit: "Bolsas" },
    { name: "Pimienta Rojo", unit: "2 Cajas" },
    { name: "Pimienta Verde", unit: "Cajas" },
    { name: "Canela Botella 453.6 gramos", unit: "Unidad" },
    { name: "Canela", unit: "Botes" },
    { name: "Pimienta sobre BOPP transparente", unit: "0.5 gramos" },
    { name: "Chile sobre BOPP transparente", unit: "0.5 gramos" },
    { name: "Aderezo Ranch 3.78 L / 128 oz", unit: "Unidad" },
    { name: "Mostaza", unit: "Unidad" },
    { name: "Sal", unit: "Libra" },
    { name: "Sal", unit: "Arobas" },
    { name: "Mayonesa Unidad 200 g", unit: "Unidad" },
    { name: "Chimichurri", unit: "Bolsas" },
    { name: "Condimentos", unit: "Botes" },
    { name: "Cebolla Morada Libra", unit: "Libra" },
    { name: "Cebolla Blanca Libra", unit: "Libra" },
    { name: "Arándanos Bolsa 1.36 kg / 48 oz", unit: "Unidad" },
    { name: "Arúgula Bolsa 227 g / 8 oz", unit: "Unidad" },
    { name: "Aguacate Express 2 Unidades 1 lb", unit: "2 Unidad" },
    { name: "Lechuga Romana Bolsa 227 g / 8 oz", unit: "Bolsa" },
    { name: "Tomate Cherry 567 g / 1.25 lb", unit: "1.25 Libras" },
    { name: "Tomate", unit: "5 Libras" },
    { name: "Fresas Bolsa 5 lb", unit: "Libra" },
    { name: "Fresas", unit: "Bolsas" },
    { name: "Chile Jalapeño", unit: "Unidad" },
    { name: "Chile Pimiento Verde", unit: "Unidad" },
    { name: "Chile Pimiento Rojo", unit: "Unidad" },
    { name: "Champiñones", unit: "Unidad" },
    { name: "Piña", unit: "Unidad" },
    { name: "Piñas", unit: "Unidades" },
    { name: "Piñas Verdes", unit: "Unidades" },
    { name: "Tomate Seco Botella 907 gramos", unit: "Unidad" },
    { name: "Limón", unit: "Libra" },
    { name: "Pitahaya", unit: "Bolsas" },
    { name: "Harina Panqueques", unit: "Unidad" },
    { name: "Harina Trigo Saco 50 lbs", unit: "Saco 50 Libras" },
    { name: "Aceite", unit: "Canecas" },
    { name: "Asistin", unit: "Galones" },
    { name: "Garrafón de Agua", unit: "Unidad" },
    { name: "Vasos Caja 200 Unidades 236 ml / 8 oz", unit: "Caja" },
    { name: "Vasos para Frappuccino", unit: "Cajas" },
    { name: "Vasos Desechables", unit: "Paquetes" },
    { name: "Vasos Rojos para Capuchino", unit: "Cajas" },
    { name: "Vasos Blancos para Capuchino", unit: "Cajas" },
    { name: "Toalla de Papel Paquete 3 Unidades / 170 m", unit: "Paquete" },
    { name: "Papel para Manos", unit: "Paquetes" },
    { name: "Bolsa Basura Caja 50 Unidades 208 L", unit: "Caja" },
    { name: "Bolsas para Basura (55 galones)", unit: "Cajas" },
    { name: "Bolsas para Basura (33 galones)", unit: "Cajas" },
    { name: "Bolsas para Basura Extra Grande", unit: "Rollos" },
    { name: "Bolsas para Basura Medianas", unit: "Rollos" },
    { name: "Cajas para Finger", unit: "Paquetes" },
    { name: "Cajas para Pizza", unit: "Paquetes" },
    { name: "Cajas para Canelitas", unit: "Paquetes" },
    { name: "Caja Fingers", unit: "Caja 50 Unidades" },
    { name: "Caja Pizza", unit: "Caja 50 Unidades" },
    { name: "Cajas de Vipizza", unit: "Paquetes" },
    { name: "Saborizante Moca Chocolate", unit: "Cajas" },
    { name: "Saborizante Fresa", unit: "Cajas" },
    { name: "Topping de Chocolate", unit: "Cajas" },
    { name: "Topping de Caramelo", unit: "Cajas" },
    { name: "Café Expreso", unit: "Cajas" },
    { name: "Leche Descremada", unit: "Cajas" },
    { name: "Leche Entera", unit: "Cajas" },
    { name: "Leche Deslactosada", unit: "Cajas" },
    { name: "Crema Batida", unit: "Bolsas" },
    { name: "Agua Dulce", unit: "Galones" },
    { name: "Bandejas para Postres", unit: "Paquetes" },
    { name: "Bolsas de Papel Kraft", unit: "Unidades" },
    { name: "Servilleta Nuve Blanca 6 Unidades / 300", unit: "Caja" },
    { name: "Servilletas", unit: "Paquetes" },
    { name: "Limpia Vidrios", unit: "Unidad" },
    { name: "Detergente", unit: "Caja" },
    { name: "Desinfectante Fabuloso Caja 2 Unidades / 5 L", unit: "Unidad" },
    { name: "Jabón Líquido", unit: "Unidad" },
    { name: "Jabón para Platos 2.66 L / 90 oz", unit: "Unidad" },
    { name: "Pastilla para Baño", unit: "Unidad" },
    { name: "Aromatizante", unit: "Paquete" },
    { name: "Bolsas de Basura 55 Gall", unit: "Paquete" },
    { name: "Bolsas de Basura 11 Gall", unit: "Paquete" },
    { name: "Papel de Baño", unit: "Unidad" },
    { name: "Raid", unit: "Unidad" },
    { name: "Scotch Esponja", unit: "Unidad" },
    { name: "Esponja de Alambre", unit: "Unidad" },
    { name: "Jabón de Bola", unit: "Unidad" },
    { name: "Cloro Galón", unit: "Unidad" },
    { name: "Toalla de Manos", unit: "Unidad" },
    { name: "Alcohol Líquido", unit: "Unidad" },
    { name: "Trapeadores", unit: "Unidad" },
    { name: "Trapeadores", unit: "Caja" },
    { name: "Toallas para Limpiar Mesas", unit: "Unidad" },
    { name: "Escobas", unit: "Unidad" },
    { name: "Ajax Caja 4 Unidades / 600 g", unit: "Caja" },
    { name: "Cuaderno", unit: "Unidad" },
    { name: "Lapiceros", unit: "Unidad" },
    { name: "Marcadores", unit: "Unidad" }
];

window.onload = function() {
    const productForm = document.getElementById('product-form');

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productTitle = document.createElement('h2');
        productTitle.textContent = product.name;
        productDiv.appendChild(productTitle);

        const labelPresentation = document.createElement('label');
        labelPresentation.setAttribute('for', `presentation${index + 1}`);
        labelPresentation.textContent = 'Presentación:';
        productDiv.appendChild(labelPresentation);

        const inputPresentation = document.createElement('input');
        inputPresentation.type = 'text';
        inputPresentation.id = `presentation${index + 1}`;
        inputPresentation.placeholder = 'Ej. Caja (24 unidades) / Botella (500 ml)';
        productDiv.appendChild(inputPresentation);

        const labelQuantity = document.createElement('label');
        labelQuantity.setAttribute('for', `quantity${index + 1}`);
        labelQuantity.textContent = 'Cantidad utilizada por semana:';
        productDiv.appendChild(labelQuantity);

        const inputQuantity = document.createElement('input');
        inputQuantity.type = 'number';
        inputQuantity.id = `quantity${index + 1}`;
        productDiv.appendChild(inputQuantity);

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

        productForm.appendChild(productDiv);
    });
};

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

function generateReport() {
    const { jsPDF } = window.jspdf;

    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Reporte de Productos", 10, 10);
    doc.setFontSize(12);

    let tableData = [
        ["Producto", "Presentación", "Cantidad utilizada por semana"]
    ];

    let isValid = true;

    products.forEach((product, index) => {
        const presentation = document.getElementById(`presentation${index + 1}`);
        const quantity = document.getElementById(`quantity${index + 1}`);
        const notUsed = document.getElementById(`not-used${index + 1}`).checked;

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

        if (notUsed) {
            tableData.push([product.name, "Este producto no se utiliza", "-"]);
        } else {
            tableData.push([product.name, presentation.value, quantity.value]);
        }
    });

    if (!isValid) {
        errorMessage.textContent = "Por favor, completa todos los campos requeridos.";
        return;
    }

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

function downloadReport() {
    if (!reportPDF) {
        generateReport();
    }
    reportPDF.save("reporte_productos.pdf");
}

function shareReport() {
    if (!reportPDF) {
        generateReport();
    }
    const pdfOutput = reportPDF.output('blob');
    const file = new File([pdfOutput], "reporte_productos.pdf", {
        type: "application/pdf"
    });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({
            title: 'Reporte de Productos',
            files: [file]
        }).catch(error => console.error('Error al compartir:', error));
    } else {
        alert("La función de compartir no es compatible con su navegador.");
    }
}
