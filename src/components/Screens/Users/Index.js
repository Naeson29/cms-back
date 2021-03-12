// Library
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {withTranslation} from "react-i18next";
import {ReactSVG} from "react-svg";
import {ACTIONS} from "../../../utils/Actions";
import {connect} from "react-redux";
import Functions from "../../../containers/Features/PanelFunction";
import Loader from "../../Features/Loading";
import {MODALS} from "../../../utils/Modals";

// Components

class Index extends Component {
    constructor(props) {
        super(props);

        props.load();
    }

    render() {
    	const {open, users, loading, deleteModal} = this.props;

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

								const paramsModal = {
									type : MODALS.DELETE,
									params : {
										message : 'Confirmer la suppression de l\'utilisateur',
										complement : `${key.first_name} ${key.last_name}`,
										destroy : {
											action : 'User',
											id : key.id
										}
									}
								}

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
													onClick={() => deleteModal(paramsModal)}
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
	deleteModal: PropTypes.func,
	users : PropTypes.array,
	loading : PropTypes.bool,
};

Index.defaultProps = {
	open : ()=> {},
	deleteModal : ()=> {},
	users : [],
	loading : false,
};

export default connect(() => {return {}}, Functions)(Index);

