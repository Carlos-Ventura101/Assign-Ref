import React, { useState, useEffect } from "react";
import { Table, Row, Col, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import gameReportService from "services/gameReportService";
import FoulRow from "./FoulRow";
import * as dateFormater from "../../utils/dateFormater";
import debug from "sabio-debug";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const _logger = debug.extend("FoulReportTable");

function FoulReportTable() {
  const { gamereportid } = useParams();
  const location = useLocation();
  const [foulData, setFoulData] = useState({
    id: gamereportid,
    foulList: [],
    foulComponents: [],
    officials: [
      { name: "John Snow", position: { id: 1, code: "R" } },
      { name: "Terry Miles", position: { id: 2, code: "U" } },
      { name: "Marcus Miller", position: { id: 3, code: "H" } },
      { name: "James Smith", position: { id: 4, code: "L" } },
      { name: "Terry Donavin", position: { id: 5, code: "S" } },
      { name: "Emilio Styles", position: { id: 6, code: "F" } },
      { name: "Juan Cabrera Jr", position: { id: 7, code: "B" } },
      { name: "Michael Jennings", position: { id: 8, code: "C" } },
    ],
  });

  useEffect(() => {
    gameReportService
      .getReportDetailed(foulData.id)
      .then(onGetReportDetailedSuccess)
      .catch(onGetReportDetailedError);
  }, []);

  const onGetReportDetailedSuccess = (response) => {
    _logger(response);
    let gameReport = response.item;
    setFoulData((prevState) => {
      const newFoul = { ...prevState, ...gameReport };
      newFoul.foulComponents = gameReport?.fouls?.map(mapFoul);
      return newFoul;
    });
  };

  const mapFoul = (aFoul) => {
    _logger(aFoul);
    return <FoulRow foul={aFoul} key={aFoul.id} />;
  };

  const getOfficial = (position) => {
    let result = "";
    const off = foulData.officials.filter(
      (official) => official.position.code === position
    );
    if (off.length > 0) {
      result = off[0].name;
    }

    return result;
  };

  const onGetReportDetailedError = () => {
    toast.error("Errors found, please try again");
  };

  useEffect(() => {
    if (location?.state?.type === "select game" && location.state.payload) {
      setFoulData((prevState) => {
        _logger(prevState, location.state.payload);
        return { ...prevState, ...location.state.payload };
      });
    }
  }, []);

  return (
    <React.Fragment>
      <Card className="px-4">
        <Row className="mb-4">
          <Col md={7} className="px-5 py-4">
            <Row>
              <Col md={2}>
                <img
                  src={foulData?.conference?.logo}
                  width="75"
                  height="60"
                  className="img-fluid object-fit-sm-contain rounded-top"
                  alt="..."
                />
              </Col>
              <Col md={10}>
                <h3 className="fw-bold pt-3">Foul Report</h3>
                <h3 className="fs-3 shadow-none bg-body-tertiary rounded">
                  {foulData?.conference?.name}
                </h3>
              </Col>
            </Row>
          </Col>
          <span className="border border-4"></span>
        </Row>

        <div className="row justify-content-center">
          <Row>
            <Row className="my-3">
              <Col className="d-flex">
                <Col>
                  <h5 className="lh-lg fw-bold">
                    {" "}
                    Date: {dateFormater.formatDate(foulData?.startTime)}
                  </h5>
                </Col>
                <Col>
                  <h5 className="lh-lg fw-bold">
                    Start Time: {dateFormater.formatTime(foulData?.startTime)}{" "}
                  </h5>
                </Col>
                <Col>
                  <h5 className="lh-lg fw-bold">
                    End Time: {dateFormater.formatTime(foulData?.endTime)}
                  </h5>{" "}
                </Col>
                <Col>
                  <h5 className="lh-lg fw-bold">
                    Conference/League: {foulData?.conference?.code}
                  </h5>
                </Col>
              </Col>
            </Row>

            <Row className="my-3">
              <Col className="d-flex">
                <Col>
                  <h5 className="lh-lg fw-bold">
                    Home: {foulData?.homeTeam?.code} {foulData?.homeTeam?.name}{" "}
                  </h5>
                </Col>
                <Col>
                  <h5 className="lh-lg fw-bold">
                    Score:{"   "}
                    {foulData?.homeTeam?.score}
                  </h5>
                </Col>
              </Col>
              <Col className="d-flex">
                <Col>
                  <h5 className="lh-lg fw-bold">
                    R:{"   "}
                    {getOfficial("R")}
                  </h5>
                </Col>
                <Col>
                  <h5 className="lh-lg fw-bold">F: {getOfficial("F")}</h5>
                </Col>
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="d-flex">
                {" "}
                <Col>
                  <h5 className="lh-lg fw-bold">
                    Visitor: {"   "}
                    {foulData?.visitingTeam?.code}{" "}
                    {foulData?.visitingTeam?.name}
                  </h5>
                </Col>
                <Col>
                  {" "}
                  <h5 className="lh-lg fw-bold">
                    Score:{"   "}
                    {foulData?.visitingTeam?.score}
                  </h5>
                </Col>
              </Col>
              <Col className="d-flex">
                <Col>
                  {" "}
                  <h5 className="lh-lg fw-bold">U: {getOfficial("U")}</h5>
                </Col>
                <Col>
                  {" "}
                  <h5 className="lh-lg fw-bold">S: {getOfficial("S")}</h5>
                </Col>
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="d-flex">
                <Col>
                  <h5 className="lh-lg fw-bold">
                    Overtime?:{" "}
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineIsOvertime"
                        id="inlineIsOvertimeNo"
                        value="inlineIsOvertimeNo"
                      />
                      {"  "}
                      <label
                        className="form-check-label font-monospace"
                        htmlFor="inlineisOvertimeNo"
                      >
                        No
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineIsOvertime"
                        id="inlineIsOvertimeYes"
                        value="inlineIsOvertimees"
                      />
                      <label
                        className="form-check-label font-monospace"
                        htmlFor="inlineIsOvertimeYes"
                      >
                        Yes
                      </label>
                    </div>
                  </h5>
                </Col>
                <Col>
                  {" "}
                  <h5 className="lh-lg fw-bold">
                    No. of Extra Periods:
                    {foulData?.overtimePeriods}
                  </h5>{" "}
                </Col>
              </Col>
              <Col className="d-flex">
                <Col>
                  <h5 className="lh-lg fw-bold">H: {getOfficial("H")}</h5>{" "}
                </Col>
                <Col>
                  <h5 className="lh-lg fw-bold">B: {getOfficial("B")}</h5>
                </Col>
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="d-flex">
                <Col>
                  <h5 className="lh-lg fw-bold">
                    Total Time: {dateFormater.convertToHour(foulData?.time)}
                    <Row>
                      <h8> Includes Overtime</h8>
                    </Row>
                  </h5>{" "}
                </Col>
                <Col>
                  <h5 className="lh-lg fw-bold">
                    TV?:{" "}
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineIsOvertime"
                        id="inlineIsTvYes"
                        value="inlineIsTvYes"
                      />
                      <label
                        className="form-check-label font-monospace"
                        htmlFor="inlineIsTvYes"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineIsTv"
                        id="inlineIsTvNo"
                        value="inlineIsTvNo"
                      />
                      <label
                        className="form-check-label font-monospace"
                        htmlFor="inlineIsTvNo"
                      >
                        No
                      </label>
                    </div>
                  </h5>
                </Col>
              </Col>
              <Col className="d-flex">
                <Col>
                  <h5 className="lh-lg fw-bold">L: {getOfficial("L")}</h5>{" "}
                </Col>
                <Col>
                  <h5 className="lh-lg fw-bold">C: {getOfficial("C")}</h5>
                </Col>
              </Col>
            </Row>
          </Row>
          <Row className="pt-5">
            <Col>
              <Table
                hover
                responsive
                role="table"
                className="text-nowrap text-center table"
              >
                <thead className="table-light text-center">
                  <tr>
                    <th className="px-2">QTR</th>
                    <th className="px-2">Time</th>
                    <th className="px-2">Team</th>
                    <th>Foul Called</th>
                    <th className="px-1">
                      <p className="my-1">Offense Defense</p> Kick/Rec
                    </th>
                    <th className="px-2">
                      {" "}
                      <p className="my-1">Player</p> No.
                    </th>
                    <th className="px-1">
                      {" "}
                      <p className="my-1">Accept Decline</p> Offset
                    </th>
                    <th>Officials</th>
                    <th>Comment</th>
                    <th className="px-1">Grade</th>
                  </tr>
                </thead>
                <tbody>{foulData.foulComponents}</tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Card>
    </React.Fragment>
  );
}
export default FoulReportTable;
