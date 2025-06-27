
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { ChevronLeft, ChevronRight, Clock, User, Phone } from 'lucide-react';
import { format } from 'date-fns';

const DoctorSchedule = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const appointments = [
    {
      id: 1,
      time: "09:00 AM",
      duration: 30,
      patient: "Riya Sharma",
      phone: "+91 98765 43210",
      type: "Routine Checkup",
      symptoms: "Regular cleaning and checkup",
      status: "confirmed"
    },
    {
      id: 2,
      time: "10:30 AM",
      duration: 60,
      patient: "John Doe",
      phone: "+91 98765 43211",
      type: "Root Canal",
      symptoms: "Severe pain in lower molar",
      status: "confirmed"
    },
    {
      id: 3,
      time: "12:00 PM",
      duration: 45,
      patient: "Sarah Wilson",
      phone: "+91 98765 43212",
      type: "Crown Fitting",
      symptoms: "Crown replacement needed",
      status: "pending"
    },
    {
      id: 4,
      time: "02:00 PM",
      duration: 30,
      patient: "Mike Johnson",
      phone: "+91 98765 43213",
      type: "Consultation",
      symptoms: "Tooth sensitivity",
      status: "confirmed"
    },
    {
      id: 5,
      time: "03:30 PM",
      duration: 90,
      patient: "Lisa Brown",
      phone: "+91 98765 43214",
      type: "Oral Surgery",
      symptoms: "Wisdom tooth extraction",
      status: "confirmed"
    }
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM"
  ];

  const getAppointmentForSlot = (time: string) => {
    return appointments.find(apt => apt.time === time);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Schedule</h1>
          <p className="text-gray-600">
            {selectedDate ? format(selectedDate, 'EEEE, MMMM do, yyyy') : 'Select a date'}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous Day
          </Button>
          <Button variant="outline">
            Next Day
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Calendar Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Booked</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Pending</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Grid */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Today's Schedule</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {timeSlots.map((time) => {
                const appointment = getAppointmentForSlot(time);
                return (
                  <div key={time} className="flex items-center border rounded-lg p-3">
                    <div className="w-20 text-sm font-medium text-gray-600">
                      {time}
                    </div>
                    <div className="flex-1 ml-4">
                      {appointment ? (
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <User className="h-4 w-4 text-gray-400" />
                              <div>
                                <p className="font-medium text-gray-900">{appointment.patient}</p>
                                <p className="text-sm text-gray-600">{appointment.type}</p>
                                <p className="text-xs text-gray-500">{appointment.symptoms}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="text-right">
                              <p className="text-xs text-gray-500 flex items-center">
                                <Phone className="h-3 w-3 mr-1" />
                                {appointment.phone}
                              </p>
                              <p className="text-xs text-gray-500">{appointment.duration} mins</p>
                            </div>
                            <Badge 
                              variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                              className={
                                appointment.status === 'confirmed' 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : 'bg-orange-100 text-orange-800'
                              }
                            >
                              {appointment.status}
                            </Badge>
                            <div className="flex space-x-1">
                              <Button size="sm" variant="outline">
                                View
                              </Button>
                              <Button size="sm" variant="outline">
                                Reschedule
                              </Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <p className="text-gray-400 italic">Available</p>
                          <Button size="sm" variant="ghost" className="text-green-600">
                            + Block Time
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
                <p className="text-2xl font-bold text-gray-900">{appointments.length}</p>
              </div>
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">
                  {appointments.filter(a => a.status === 'confirmed').length}
                </p>
              </div>
              <User className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-orange-600">
                  {appointments.filter(a => a.status === 'pending').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Hours</p>
                <p className="text-2xl font-bold text-purple-600">
                  {Math.round(appointments.reduce((sum, apt) => sum + apt.duration, 0) / 60)}h
                </p>
              </div>
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorSchedule;
