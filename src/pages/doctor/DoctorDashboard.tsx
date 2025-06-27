
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const DoctorDashboard = () => {
  const todayStats = {
    totalAppointments: 12,
    completed: 8,
    pending: 4,
    urgent: 2
  };

  const upcomingAppointments = [
    {
      id: 1,
      time: "10:30 AM",
      patient: "Riya Sharma",
      type: "Routine Checkup",
      symptoms: "Tooth sensitivity",
      urgency: "normal"
    },
    {
      id: 2,
      time: "11:15 AM",
      patient: "John Doe",
      type: "Root Canal",
      symptoms: "Severe pain in lower molar",
      urgency: "urgent"
    },
    {
      id: 3,
      time: "2:00 PM",
      patient: "Sarah Wilson",
      type: "Cleaning",
      symptoms: "Regular cleaning",
      urgency: "normal"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Good morning, Dr. Johnson!</h1>
        <p className="text-blue-100">You have {todayStats.pending} appointments scheduled for today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
                <p className="text-2xl font-bold text-gray-900">{todayStats.totalAppointments}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{todayStats.completed}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-orange-600">{todayStats.pending}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Urgent Cases</p>
                <p className="text-2xl font-bold text-red-600">{todayStats.urgent}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Next Appointments</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="font-semibold text-blue-600">{appointment.time}</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{appointment.patient}</h4>
                    <p className="text-sm text-gray-600">{appointment.type}</p>
                    <p className="text-sm text-gray-500">{appointment.symptoms}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant={appointment.urgency === 'urgent' ? 'destructive' : 'secondary'}>
                    {appointment.urgency === 'urgent' ? 'Urgent' : 'Normal'}
                  </Badge>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button className="h-20 bg-blue-600 hover:bg-blue-700">
              <div className="text-center">
                <Users className="h-6 w-6 mx-auto mb-2" />
                <span>View All Patients</span>
              </div>
            </Button>
            <Button variant="outline" className="h-20">
              <div className="text-center">
                <FileText className="h-6 w-6 mx-auto mb-2" />
                <span>Add Treatment Notes</span>
              </div>
            </Button>
            <Button variant="outline" className="h-20">
              <div className="text-center">
                <Calendar className="h-6 w-6 mx-auto mb-2" />
                <span>Manage Schedule</span>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorDashboard;
