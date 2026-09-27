export default function Today() {
  return (
    <div>
      <h1>Today</h1>
      {/* stats */}
      <div className="grid grid-cols-3 gap-4">
        <div>
            <span>47</span>
            <span>Partituras Completadas</span>
        </div>
        <div>
            <span>21 Dias</span>
            <span>Mejor Racha</span>
        </div>
        <div>
            <span>Inter. 3</span>
            <span>Nivel actual</span>
        </div>
      </div>
    </div>
  );
}