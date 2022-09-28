import { NativescriptDriver } from "./nativescript/NativescriptDriver"
import { Driver } from "./Driver"
import { DataSource } from "../data-source/DataSource"

/**
 * Helps to create drivers.
 */
export class DriverFactory {
    /**
     * Creates a new driver depend on a given connection's driver type.
     */
    create(connection: DataSource): Driver {
        return new NativescriptDriver(connection)
    }
}
