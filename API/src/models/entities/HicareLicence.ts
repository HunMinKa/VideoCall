import { Column, Entity } from "typeorm";

@Entity("hicare_licence", { schema: "hicare" })
export class HicareLicence {
  @Column("char", { primary: true, name: "LICENCE_UID", length: 36 })
  licenceUid: string;

  @Column("varchar", {
    name: "LICENCE_COMPANY_NAME",
    nullable: true,
    length: 50,
  })
  licenceCompanyName: string | null;

  @Column("varchar", { name: "LICENCE_MANAGER", nullable: true, length: 50 })
  licenceManager: string | null;

  @Column("varchar", { name: "LICENCE_EMAIL", nullable: true, length: 50 })
  licenceEmail: string | null;

  @Column("varchar", { name: "LICENCE_TEL_NUMBER", nullable: true, length: 50 })
  licenceTelNumber: string | null;

  @Column("varchar", { name: "LICENCE_ISSUE_DATE", nullable: true, length: 50 })
  licenceIssueDate: string | null;

  @Column("varchar", {
    name: "LICENCE_EXPIRATION_DATE",
    nullable: true,
    length: 50,
  })
  licenceExpirationDate: string | null;

  @Column("varchar", {
    name: "LICENCE_PATIENT_NUMBER",
    nullable: true,
    length: 50,
  })
  licencePatientNumber: string | null;

  @Column("varchar", { name: "LICENCE_KEY", nullable: true, length: 50 })
  licenceKey: string | null;

  @Column("varchar", { name: "LICENCE_JWT_KEY", nullable: true, length: 50 })
  licenceJwtKey: string | null;

  @Column("tinyint", { name: "LICENCE_INUSED", nullable: true })
  licenceInused: number | null;
}
