import { useEffect, useRef } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'

export function LiveBusMarkers({ buses }) {
  const map = useMap()
  const markerMapRef = useRef<Map<string, L.Marker>>(new Map())

  useEffect(() => {
    buses.forEach((bus) => {
      const key = bus.vehicleId
      const newLatLng = L.latLng(bus.lat, bus.lng)

      if (markerMapRef.current.has(key)) {
        // Move marker smoothly
        const marker = markerMapRef.current.get(key)!
        marker.setLatLng(newLatLng)
      } else {
        // Create new marker
        const marker = L.marker(newLatLng, {
          icon: L.divIcon({
            className: '',
            html: `
              <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: white;
                border: 1px solid #aaa;
                border-radius: 6px;
                padding: 2px 6px;
                font-size: 12px;
                font-weight: bold;
                color: black;
                text-align: center;
                box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
                transform: rotate(${bus.bearing || 0}deg);
              ">
                <div style="font-size: 20px;">🚌</div>
                <div>${bus.vehicleId}</div>
              </div>
            `,
            iconAnchor: [15, 30],
          }),
        })
        marker.bindPopup(`
          <strong>${bus.vehicleId}</strong><br />
          Route: ${bus.routeId}<br />
          Speed: ${bus.speed} km/h
        `)
        marker.addTo(map)
        markerMapRef.current.set(key, marker)
      }
    })
  }, [buses, map])

  return null
}
