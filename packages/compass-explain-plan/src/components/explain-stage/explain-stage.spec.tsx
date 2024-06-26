import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { expect } from 'chai';

import ExplainStage from '.';

describe('ExplainStage [Component]', function () {
  let component: ReturnType<typeof render>;
  const name = '';
  const nReturned = 1;
  const highlights = {};
  const curStageExecTimeMS = 2;
  const prevStageExecTimeMS = 1;
  const totalExecTimeMS = 3;
  const isShard = false;
  const details = {};
  const x = 0;
  const y = 0;
  const xoffset = 0;
  const yoffset = 0;

  beforeEach(function () {
    component = render(
      <ExplainStage
        name={name}
        nReturned={nReturned}
        highlights={highlights}
        curStageExecTimeMS={curStageExecTimeMS}
        prevStageExecTimeMS={prevStageExecTimeMS}
        totalExecTimeMS={totalExecTimeMS}
        isShard={isShard}
        details={details}
        x={x}
        y={y}
        xoffset={xoffset}
        yoffset={yoffset}
      />
    );
  });

  afterEach(cleanup);

  it('renders', function () {
    expect(component.getByTestId('explain-stage')).to.exist;
  });
});
