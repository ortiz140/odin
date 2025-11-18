import React from "react";

const Instructions = () => {
  return (
    <div className="container">

      <h5>Controls:</h5>

      <h6><strong>Examine Mode (activate with key 'e'):</strong></h6>
      <table className="table table-striped small">
        <tbody>
          <tr>
            <th>Button</th>
            <th>Function</th>
          </tr>
          <tr>
            <td>Left Button / Left Button + Shift</td>
            <td>Rotate</td>
          </tr>
          <tr>
            <td>Mid Button / Left Button + Ctl</td>
            <td>Pan</td>
          </tr>
          <tr>
            <td>Right Button / Wheel / Left Button + Alt</td>
            <td>Zoom</td>
          </tr>
          <tr>
            <td>Left double click</td>
            <td>Set center of rotation</td>
          </tr>
        </tbody>
      </table>

      <h6><strong>Walk Mode (activate with key 'w'):</strong></h6>
      <table className="table table-striped small">
        <tbody>
          <tr>
            <th>Button</th>
            <th>Function</th>
          </tr>
          <tr>
            <td>Left Button</td>
            <td>Move forward</td>
          </tr>
          <tr>
            <td>Right Button</td>
            <td>Move backward</td>
          </tr>
        </tbody>
      </table>

      <h6><strong>Fly Mode (activate with key 'f'):</strong></h6>
      <table className="table table-striped small">
        <tbody>
          <tr>
            <th>Button</th>
            <th>Function</th>
          </tr>
          <tr>
            <td>Left Button</td>
            <td>Move forward</td>
          </tr>
          <tr>
            <td>Right Button</td>
            <td>Move backward</td>
          </tr>
        </tbody>
      </table>

      <h5 >Non-interactive camera movement:</h5>
      <table className="table table-striped small">
        <tbody>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
          <tr>
            <td>r</td>
            <td>reset view</td>
          </tr>
          <tr>
            <td>a</td>
            <td>show all</td>
          </tr>
          <tr>
            <td>u</td>
            <td>upright</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Instructions;
