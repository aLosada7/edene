import type { Story } from '../../../lib/storybook-emotion-10-fixes';
import { asChromaticStory, asPlayground } from '../../../lib/story-intents';
import { DataTable, DataTableProps } from './DataTable';
import { TableContainer } from './TableContainer';
import { Table } from './Table';
import { headers } from './shared';
import { TableHead } from './TableHead';

export default {
  component: DataTable,
  title: 'Dana/UI Elements/Table',
  args: {
    rows: [],
    headers,
  },
};

const Template: Story<DataTableProps> = (args) => (
  <DataTable {...args}></DataTable>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const DefaultTable = Template.bind({});
asChromaticStory(DefaultTable);
