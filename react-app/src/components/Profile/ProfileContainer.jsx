import React from "react";
import Profile from "./Profile";
import {getUserId, getStatus, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login")
            }
        }
       this.props.getUserId(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => {
    return ({
                profile: state.profilePage.profile,
                status: state.profilePage.status,
                isAuth: state.auth.isAuth,
                authorizedUserId: state.auth.userId
            })
}

export default compose(
    connect(mapStateToProps, {getUserId, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer);