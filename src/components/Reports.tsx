import { Card, Title, AreaChart, DonutChart, BarChart, Metric, Text, Flex, Grid } from '@tremor/react';
import { Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import { useStore } from '../store/useStore';

const chartdata = [
  { date: '2024-01', "Active Users": 167, "New Signups": 45 },
  { date: '2024-02', "Active Users": 245, "New Signups": 78 },
  { date: '2024-03', "Active Users": 321, "New Signups": 92 },
];

const valueFormatter = (number: number) => `${number}`;

export default function Reports() {
  const users = useStore((state) => state.users);
  const roles = useStore((state) => state.roles);

  const activeUsers = users.filter(u => u.status === 'active').length;
  const inactiveUsers = users.filter(u => u.status === 'inactive').length;

  const roleDistribution = roles.map(role => ({
    name: role.name,
    value: users.filter(user => user.role.id === role.id).length
  }));

  const securityEvents = [
    { name: 'Failed Login Attempts', value: 145 },
    { name: 'Password Changes', value: 86 },
    { name: 'Role Modifications', value: 23 },
    { name: 'Permission Updates', value: 42 }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center mb-8">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Security Reports</h1>
          <p className="mt-2 text-sm text-gray-700">
            Comprehensive overview of system security, user activities, and role management
          </p>
        </div>
      </div>

      <Grid numItemsSm={2} numItemsLg={4} className="gap-6 mb-6">
        <Card decoration="top" decorationColor="indigo">
          <Flex justifyContent="start" className="space-x-4">
            <Users className="h-8 w-8 text-indigo-600" />
            <div>
              <Text>Total Users</Text>
              <Metric>{users.length}</Metric>
            </div>
          </Flex>
        </Card>
        <Card decoration="top" decorationColor="green">
          <Flex justifyContent="start" className="space-x-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div>
              <Text>Active Users</Text>
              <Metric>{activeUsers}</Metric>
            </div>
          </Flex>
        </Card>
        <Card decoration="top" decorationColor="red">
          <Flex justifyContent="start" className="space-x-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <div>
              <Text>Inactive Users</Text>
              <Metric>{inactiveUsers}</Metric>
            </div>
          </Flex>
        </Card>
        <Card decoration="top" decorationColor="purple">
          <Flex justifyContent="start" className="space-x-4">
            <Shield className="h-8 w-8 text-purple-600" />
            <div>
              <Text>Total Roles</Text>
              <Metric>{roles.length}</Metric>
            </div>
          </Flex>
        </Card>
      </Grid>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <Title>User Growth Trends</Title>
          <AreaChart
            className="h-72 mt-4"
            data={chartdata}
            index="date"
            categories={["Active Users", "New Signups"]}
            colors={["indigo", "cyan"]}
            valueFormatter={valueFormatter}
          />
        </Card>

        <Card>
          <Title>Role Distribution</Title>
          <DonutChart
            className="h-72 mt-4"
            data={roleDistribution}
            category="value"
            index="name"
            valueFormatter={valueFormatter}
            colors={["indigo", "cyan", "violet", "amber"]}
          />
        </Card>
      </div>

      <Card>
        <Title>Security Events (Last 30 Days)</Title>
        <BarChart
          className="h-72 mt-4"
          data={securityEvents}
          index="name"
          categories={["value"]}
          colors={["indigo"]}
          valueFormatter={valueFormatter}
        />
      </Card>
    </div>
  );
}