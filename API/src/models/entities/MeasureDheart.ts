import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("measure_dheart", { schema: "hicare" })
export class MeasureDheart {
  @PrimaryGeneratedColumn({ type: "int", name: "seq" })
  seq: number;

  @Column("int", { name: "insung_seq", nullable: true })
  insungSeq: number | null;

  @Column("varchar", { name: "bpm", nullable: true, length: 10 })
  bpm: string | null;

  @Column("varchar", { name: "pr", nullable: true, length: 10 })
  pr: string | null;

  @Column("varchar", { name: "qrs", nullable: true, length: 10 })
  qrs: string | null;

  @Column("varchar", { name: "qt", nullable: true, length: 10 })
  qt: string | null;

  @Column("varchar", { name: "rr", nullable: true, length: 10 })
  rr: string | null;

  @Column("varchar", { name: "qtc", nullable: true, length: 10 })
  qtc: string | null;

  @Column("varchar", { name: "measure_date", nullable: true, length: 14 })
  measureDate: string | null;

  @Column("datetime", { name: "input_utc_dt", nullable: true })
  inputUtcDt: Date | null;

  @Column("varchar", { name: "measure_device", nullable: true, length: 50 })
  measureDevice: string | null;

  @Column("int", { name: "timezone_offset", nullable: true })
  timezoneOffset: number | null;

  @Column("datetime", { name: "measure_utc_dt", nullable: true })
  measureUtcDt: Date | null;

  @Column("varchar", { name: "auto_timezone", nullable: true, length: 1 })
  autoTimezone: string | null;

  @Column("varchar", { name: "pdf_file", nullable: true, length: 100 })
  pdfFile: string | null;

  @Column("varchar", { name: "device_code", nullable: true, length: 50 })
  deviceCode: string | null;
}
