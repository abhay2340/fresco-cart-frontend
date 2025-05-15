// import { MapContainer, TileLayer } from 'react-leaflet'
import { useParams } from 'react-router-dom'

// import { useBus } from '../query/useBus'

// import { LiveBusMarkers } from './LiveBusMarkers'
import UserForm from './userForm'

export function EditUserForm() {
  const { id } = useParams()
  // const { data: buses = [] } = useBus()

  return (
    <>
      <UserForm userId={id} />
      <h2 style={{ marginTop: '16px' }}>🚌 Live Bus Tracking</h2>
      {/* <MapContainer
        center={[28.6139, 77.209]}
        zoom={11}
        scrollWheelZoom
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LiveBusMarkers buses={buses} />
      </MapContainer> */}
    </>
  )
}

