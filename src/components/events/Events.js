import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Event from "./Event";
import "../Styles/Events.css";
import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';

function Events(props) {
	let { events } = props.EventsStore;

	return (
		<div className='collections-container'>
<Link to='/home'>
					<Button
						style={{
							marginTop: "1em",
							marginLeft: "1em",
						}}
						variant='contained'
						color='primary'
					>
						Back
					</Button>
				</Link>

			{events.map((event) => {
				return (
					<div className='collection-container'>
						<div
							style={{
								textAlign: "center",
								fontSize: "0.5em",
								width: "200px",
								lineHeight: "3.2em",
								color: "rgba(80,80,80,1)",
							}}
						>
							<h1>{event.title}</h1>
						</div>
						<Link to={`/event/${event._id}`}>
							{console.log(`${event._id}`)}
							<img
                                style={{
                                    outline:"4px solid rgba(80,80,80,1)"
                                }}
								width='200px'
								height='200px'
								src={event.gallery[0].imageURL}
								alt=''
							/>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default inject("EventsStore")(observer(Events));
