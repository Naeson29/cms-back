// Library
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {withTranslation} from "react-i18next";
import {ReactSVG} from "react-svg";
import {ACTIONS} from "../../../utils/Actions";
import {connect} from "react-redux";
import Functions from "../../../containers/Features/PanelFunction";
import Loader from "../../Features/Loading";

// Components

class Index extends Component {
    constructor(props) {
        super(props);

        props.load();
    }

    render() {
    	const {open, users, loading} = this.props;

        return (
			<div className={'fragment users'}>
				<h1>
					<span>{'Utilisateurs'}</span>
				</h1>
				{
					loading ? <Loader /> :

					<div className={'list-card'}>
						{
							users.map((key, index)=> {
								return (
									<div
										className={'card-container'}
										key={index}
									>
										<div className={'card'}>
											<p className={'name'}>{`${key.first_name} ${key.last_name}`}</p>
											<p className={'email'}>{key.email}</p>
											<div className={'action'}>
												<ReactSVG
													src="./img/pencil.svg"
													onClick={() => {}}
													className={'button edit'}
												/>
												<ReactSVG
													src="./img/trash.svg"
													onClick={() => {}}
													className={'button trash'}
												/>
											</div>
										</div>
									</div>
								)
							})
						}
						<ReactSVG
							src="./img/add.svg"
							onClick={() => open(ACTIONS.PANEL_USER)}
							className={'add'}
						/>
					</div>
				}
			</div>
        );
    }
}

Index.propTypes = {
	open: PropTypes.func,
	users : PropTypes.array,
	loading : PropTypes.bool,
};

Index.defaultProps = {
	open : ()=> {},
	users : [],
	loading : false,
};

export default connect(() => {return {}}, Functions)(Index);

