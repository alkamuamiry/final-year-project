import  {Routes,Route, BrowserRouter  } from 'react-router-dom'
import Login from './pages/LoginPage'
import ProtectedRoute from './component/ProtectedRoute'
import DashboardLayout from './component/DashboardLayout'
import AdminDashboard from './component/AdminDashboard'
import Students from './pages/StudentListPage'
import RegisterStudent from './pages/StudentRegPage'
import Devices from './pages/DevicePage'
import { Toaster } from "sonner";
import StudentUpdateForm from './pages/StudentEditInfo'
import DeviceSettingsPage from './pages/DeviceSettingPage'
import StudentFaceDashboard from './pages/FacialManagementPage'
import StudentFaceUploadPage from './pages/FaceRegisterPage'
const App = () => {
  return (
  <>
   <Toaster />
   <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<Login/>}/>
            <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AdminDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/students"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Students />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/student/edit/:id"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <StudentUpdateForm/>
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/register"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <RegisterStudent />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/devices"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Devices />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute>
            <DashboardLayout>
             <DeviceSettingsPage/>
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/admin/faceid"
        element={
          <ProtectedRoute>
            <DashboardLayout>
             <StudentFaceDashboard/>
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/student/faceupload/:id"
        element={
          <ProtectedRoute>
            <DashboardLayout>
             <StudentFaceUploadPage/>
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
   </BrowserRouter>
 </> )
}

export default App
