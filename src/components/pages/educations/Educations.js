import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div className='card'>
				<div className='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table className='striped'>
						<thead>
							<tr>
								<th>Degree</th>
								<th>Date</th>
								<th>College/Univesity</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>M.Tech</td>
								<td>May 2020</td>
								<td>
								   Dronacharya college of Engineering

									{/* <Link to='/details' className='btn blue lighten-2'>
										View
									</Link> */}
								</td>
							</tr>
							<tr>
								<td>B.Tech</td>
								<td>June 2016</td>
								<td>
									Bangalore Institute of Technology
									{/* <Link to='/details' className='btn blue lighten-2'>
										View
									</Link> */}
								</td>
							</tr>
							{/* <tr>
								<td>Tech Gadgets</td>
								<td>June 2020</td>
								<td>
									<Link to='/details' className='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr> */}
								{/* <td>Other</td>
								<td>Dec 2020</td>
								<td>
									<Link to='/details' className='btn blue lighten-2'>
										View
									</Link>
								</td> */}
							{/* </tr> */}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
