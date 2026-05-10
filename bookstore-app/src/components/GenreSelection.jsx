import { useState } from "react";
import "../styles/gen.css";

export const GenreSelection = ({ data }) => {
	console.log("data ---> ", data);

	const [showFiction, setShowFiction] = useState(true);
	const [showNonFiction, setShowNonFiction] = useState(true);
	const [showChildren, setShowChildren] = useState(true);

	const fictionBooks = data.fiction;
	const nonFictionBooks = data["non-fiction"];
	const childrenBooks = data.children;
	return (
		<div className="outer-box">
			<h1 style={{ textAlign: "center" }}>Online Bookstore</h1>

			<div className="button-container">
				{showFiction ? (
					<button onClick={() => setShowFiction(!showFiction)}>Hide Fiction</button>
				) : (
					<button onClick={() => setShowFiction(!showFiction)}>Show Fiction</button>
				)}

				{showNonFiction ? (
					<button onClick={() => setShowNonFiction(!showNonFiction)}>Hide Non-Fiction</button>
				) : (
					<button onClick={() => setShowNonFiction(!showNonFiction)}>Show Non-Fiction</button>
				)}

				{showChildren ? (
					<button onClick={() => setShowChildren(!showChildren)}>Hide Children</button>
				) : (
					<button onClick={() => setShowChildren(!showChildren)}>Show Children</button>
				)}
			</div>

			{showFiction ? (
				<>
					<h2>Fiction: </h2>
					{fictionBooks.map((element, index) => (
						<div key={index} className="book-row">
                            <span className="details">
                                <i>{element.title}</i>, {element.author}
                            </span>

                            <div className="spacer"></div> {/* This will create the --- line */}

                            <span className="price">${element.price.toFixed(2)}</span>
						</div>
					))}
				</>
			) : null}

			{showNonFiction ? (
				<>
					<h2>Non-Fiction: </h2>
					{nonFictionBooks.map((element, index) => (
						<div key={index} className="book-row">
							<span className="details">
								<i>{element.title}</i>, {element.author}
							</span>

                            <div className="spacer"></div> {/* This will create the --- line */}

							<span className="price">${element.price.toFixed(2)}</span>
						</div>
					))}
				</>
			) : null}

			{showChildren ? (
				<>
					<h2>Children Literature: </h2>
					{childrenBooks.map((element, index) => (
						<div key={index} className="book-row">
							<span className="details">
								<i>{element.title}</i>, {element.author}
							</span>

                            <div className="spacer"></div> {/* This will create the --- line */}

							<span className="price">${element.price.toFixed(2)}</span>
						</div>
					))}
				</>
			) : null}
		</div>
	);
};