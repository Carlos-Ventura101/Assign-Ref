import React from "react";
import PropTypes from "prop-types";
function FoulRow(props) {
  const aFoul = props.foul;
  const fTime = aFoul.time?.slice(0, aFoul.time?.length - 3);

  return (
    <tr key={aFoul.id} className="text-center">
      <td className="px-2">{aFoul.period?.name}</td>
      <td className="px-2">{fTime}</td>
      <td className="px-2">
        {" "}
        <row className="flex-nowrap input-group">
          <img
            src={props.foul.team?.logo}
            alt=""
            className="img-fluid avatar-sm mx-3 game-report-table-logo"
          />{" "}
          {aFoul.team?.name}{" "}
        </row>
      </td>
      <td>{aFoul.foulType?.code}</td>
      <td>{aFoul.teamPossession?.name}</td>
      <td className="px-2">{aFoul.playerNumber} </td>
      <td>{aFoul.penaltyStatus?.name} </td>
      <td>{}</td>
      <td>{aFoul.comment}</td>
      <td>{}</td>
    </tr>
  );
}

FoulRow.propTypes = {
  foul: PropTypes.shape({
    id: PropTypes.number.isRequired,
    comment: PropTypes.string,
    period: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    time: PropTypes.string.isRequired,
    team: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
    }).isRequired,
    entryType: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    foulDescription: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    foulType: PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string.isRequired,
    }).isRequired,
    teamPossession: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    playerNumber: PropTypes.number.isRequired,
    penaltyStatus: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    officialsCallingPosition: PropTypes.string,
    correctIncorrectMarginal: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default FoulRow;
