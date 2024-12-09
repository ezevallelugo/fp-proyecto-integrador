// Metodo de pago
const listMethods = ["Visa", "Mastercard", "Mercado Pago", "Tarjeta Shopping", "PayPal"];
const paymentMethods = document.getElementById("payment_methods");

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.text = "Seleccione un método de pago";
defaultOption.disabled = true;
paymentMethods.add(defaultOption);

paymentMethods.selectedIndex = 0;

for (let i = 0; i < listMethods.length; i++) {
    const option = document.createElement("option");
    option.value = listMethods[i];
    option.text = listMethods[i];
    paymentMethods.add(option);
}

// Fecha de expiración
const listMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const listYears = ["2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036"];

const month = document.getElementById("month");
const year = document.getElementById("year");

const defaultOptionMonth = document.createElement("option");
defaultOptionMonth.value = "";
defaultOptionMonth.text = "Mes";
defaultOptionMonth.disabled = true;
month.add(defaultOptionMonth);

month.selectedIndex = 0;

for (let i = 0; i < listMonths.length; i++) {
    const option = document.createElement("option");
    option.value = listMonths[i];
    option.text = listMonths[i];
    month.add(option);
}

const defaultOptionYear = document.createElement("option");
defaultOptionYear.value = "";
defaultOptionYear.text = "Año";
defaultOptionYear.disabled = true;
year.add(defaultOptionYear);

year.selectedIndex = 0;

for (let i = 0; i < listYears.length; i++) {
    const option = document.createElement("option");
    option.value = listYears[i];
    option.text = listYears[i];
    year.add(option);
}

// CVV
const cvv = document.getElementsByClassName("cvv_input")[0];
const span = document.createElement("span");
span.innerText = "?";
cvv.appendChild(span);

// Pronvincias
const listStates = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán"
];
const state = document.getElementById("state");

const defaultOptionState = document.createElement("option");
defaultOptionState.value = "";
defaultOptionState.text = "Seleccione una provincia";
defaultOptionState.disabled = true;
state.add(defaultOptionState);

state.selectedIndex = 0;

for (let i = 0; i < listStates.length; i++) {
    const option = document.createElement("option");
    option.value = listStates[i];
    option.text = listStates[i];
    state.add(option);
}

