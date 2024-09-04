import { useState } from "react";

const DEFAULT_VALUES = {
	amount: "0",
	price: "0",
	USDT: "0",
	WMZ: "0",
};

const integerFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format;
const decimalFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 }).format;

function calcValue(amount, price, value, commission) {
	return ((+amount / 1000) * +price - (+amount / 1000) * +price * commission) * +value;
}

function App() {
	const [formValues, setFormValues] = useState(DEFAULT_VALUES);
	const { amount, price, USDT, WMZ } = formValues;

	const convertedValues = {
		USDT: "0",
		WMZ: "0",
	};

	function handleUserInput(value, control) {
		setFormValues((curValues) => ({
			...curValues,
			[control]: value,
		}));
	}

	if (amount && amount != "0" && price && price != "0") {
		if (USDT && USDT != "0") convertedValues.USDT = calcValue(amount, price, USDT, 0.06);
		if (WMZ && WMZ != "0") convertedValues.WMZ = calcValue(amount, price, WMZ, 0.0111);
	}

	return (
		<form className="w-4/5 h-4/5 rounded-lg flex justify-evenly items-center bg-gray-400 bg-opacity-20 backdrop-blur-md shadow-lg">
			<div className="flex flex-col gap-1">
				<label
					htmlFor="amount"
					className="font-fira-sans font-medium capitalize text-lg text-slate-600"
				>
					amount
				</label>
				<input
					type="tel"
					id="amount"
					name="amount"
					value={formValues.amount}
					className="px-2 py-1 rounded border-none bg-slate-100 font-signika text-lg tracking-wide shadow"
					onChange={(event) => handleUserInput(event.target.value, "amount")}
				/>
				<p className="ml-2 text-sm font-signika">{integerFormatter(formValues.amount)} Gold</p>
			</div>
			<div className="flex flex-col gap-1">
				<label
					htmlFor="price"
					className="font-fira-sans font-medium capitalize text-lg text-slate-600"
				>
					price/K (USD)
				</label>
				<input
					type="tel"
					id="price"
					name="price"
					value={formValues.price}
					className="px-2 py-1 rounded border-none bg-slate-100 font-signika text-lg tracking-wide shadow"
					onChange={(event) => handleUserInput(event.target.value, "price")}
				/>
				<p className="ml-2 text-sm font-signika">{decimalFormatter(formValues.price)} USD</p>
			</div>
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-1">
					<label
						htmlFor="value-USDT"
						className="font-fira-sans font-medium capitalize text-lg text-slate-600"
					>
						USDT value (IRT)
					</label>
					<div className="flex items-center gap-8">
						<input
							type="tel"
							id="value-USDT"
							name="USDT"
							value={formValues.USDT}
							className="px-2 py-1 rounded border-none bg-slate-100 font-signika text-lg tracking-wide shadow"
							onChange={(event) => handleUserInput(event.target.value, "USDT")}
						/>
						<p className="text-lg font-medium">{integerFormatter(convertedValues.USDT)} IRT</p>
					</div>
					<p className="ml-2 text-sm font-signika">{integerFormatter(formValues.USDT)} USDT</p>
				</div>
				<div className="flex flex-col gap-1">
					<label
						htmlFor="value-WMZ"
						className="font-fira-sans font-medium capitalize text-lg text-slate-600"
					>
						WMZ value (IRT)
					</label>
					<div className="flex items-center gap-8">
						<input
							type="tel"
							id="value-WMZ"
							name="WMZ"
							value={formValues.WMZ}
							className="px-2 py-1 rounded border-none bg-slate-100 font-signika text-lg tracking-wide shadow"
							onChange={(event) => handleUserInput(event.target.value, "WMZ")}
						/>
						<p className="text-lg font-medium">{integerFormatter(convertedValues.WMZ)} IRT</p>
					</div>
					<p className="ml-2 text-sm font-signika">{integerFormatter(formValues.WMZ)} WMZ</p>
				</div>
			</div>
		</form>
	);
}

export default App;
