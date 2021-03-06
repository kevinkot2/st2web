import React from 'react';

export default class Table extends React.Component {
  static propTypes = {
    content: React.PropTypes.objectOf(React.PropTypes.node)
  }

  render() {
    const { content, ...restProps } = this.props;

    return <div className="st2-details__panel-body st2-action-reporter__header" {...restProps} >
      {
        _(content).pick(v => !!v).map((value, key) => {
          return <dl key={key} className="st2-details__panel-body-line">
            <dt className="st2-details__panel-body-label">{ key }</dt>
            <dd className="st2-details__panel-body-value">{ value }</dd>
          </dl>;
        }).value()
      }
    </div>;
  }
}
