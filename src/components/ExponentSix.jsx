const ExponentSix = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">2 * 2 * 2 * 2 * 2 * 2 = <span className="total">{props.count}</span></p>
  </div>
);

export default ExponentSix;