import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {BaseView} from "@six-group/base-angular-framework/core";

@Component({
  selector: 'EntityMappingView',
  templateUrl: './EntityMappingView.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityMappingView extends BaseView implements OnInit, AfterViewInit, OnDestroy {

  public easyRestCode = `let data:clazz[] = entityDataService.fetchData<TargetClazz>("http://server:8000/rest/fetch/data", true);`;

  public mavenExampleCode = `<plugin>
  <artifactId>maven-antrun-plugin</artifactId>
  <executions>
    <execution>
      <id>replace1</id>
      <phase>generate-resources</phase>
      <configuration>
        <tasks>
          <echo>====================================</echo>
          <echo>= EXECUTING REPLACEMENT TASKS =</echo>
          <echo>====================================</echo>
          <echo>-> Project Base Dir: \${project.basedir}</echo>
          <echo>- Running Array fix on \${project.basedir}/src/app/model/entities</echo>
          <replace token="Array = undefined" value="Array<any> = undefined" dir="\${project.basedir}/src/app/model/entities">
            <include name="**/*.ts"/>
          </replace>
          <echo>- Running Bad REST path fix on \${project.basedir}/src/app/model/entities</echo>
          <replace token="/rno/referencedata/" value="/rno/backend/referencedata/" dir="\${project.basedir}/src/app/model/api">
            <include name="**/*.ts"/>
          </replace>
          <echo>- Running 2nd Bad REST path fix on \${project.basedir}/src/app/model/entities</echo>
          <replace token="/rno/obe/" value="/rno/backend/obe/" dir="\${project.basedir}/src/app/model/api">
            <include name="**/*.ts"/>
          </replace>
          <echo>- Running Primitive Return Type Replacements on \${project.basedir}/src/app/model/entities</echo>
          <replace token="), boolean, 'boolean'); // RETURN-TYPE-MARKER" value="), undefined, 'boolean'); // RETURN-TYPE-MARKER" dir="\${project.basedir}/src/app/model/api">
            <include name="**/*.ts"/>
          </replace>
          <replace token="), string, 'string'); // RETURN-TYPE-MARKER" value="), undefined, 'string'); // RETURN-TYPE-MARKER" dir="\${project.basedir}/src/app/model/api">
            <include name="**/*.ts"/>
          </replace>
          <echo>====================================</echo>
          <echo>Annotation Propagation Task Up Ahead</echo>
          <echo>====================================</echo>
        </tasks>
      </configuration>
      <goals>
        <goal>run</goal>
      </goals>
    </execution>
  </executions>
</plugin>
  <!-- Inject annotations into all entities that are of type Date, etc -->
<plugin>
<groupId>com.google.code.maven-replacer-plugin</groupId>
<artifactId>replacer</artifactId>
<version>1.5.3</version>
<executions>
  <execution>
    <phase>generate-resources</phase>
    <goals>
      <goal>replace</goal>
    </goals>
  </execution>
</executions>
<configuration>
  <basedir>\${project.basedir}/src/app/model/entities</basedir>
  <includes>
    <include>**/*.ts</include>
  </includes>
  <regexFlags>
    <regexFlag>CASE_INSENSITIVE</regexFlag>
    <regexFlag>MULTILINE</regexFlag>
  </regexFlags>
  <replacements>
    <replacement>
      <!-- annotate all Date properties with @DateProp -->
      <token>((.*: Date) =.*)</token>
      <value>\\@DateProp\\(\\)
        $1
      </value>
    </replacement>
    <replacement>
      <!-- annotate executionTime string with a microseconds prop -->
      <token>((.*\\sexecutionTime: string) =.*)</token>
      <value>\\@StringDateWithMicrosProp\\(\\)
        $1
      </value>
    </replacement>
    <replacement>
      <!-- annotate transactionTime string with a microseconds prop -->
      <token>((.*\\stransactionTime: string) =.*)</token>
      <value>\\@StringDateWithMicrosProp\\(\\)
        $1
      </value>
    </replacement>
    <replacement>
      <!-- replace the type of execution time to MicrosecondDate -->
      <token>\\sexecutionTime: string</token>
      <value>executionTime: MicrosecondDate</value>
    </replacement>
    <replacement>
      <!-- replace the type of transaction time to MicrosecondDate -->
      <token>\\stransactionTime: string</token>
      <value>transactionTime: MicrosecondDate</value>
    </replacement>
    <replacement>
      <!-- Remove bad generation. Enums aren't recognized as they're declared as types -->
      <token>@ObjectMapping\\('.*Enum.*'\\)</token>
      <value></value>
    </replacement>
    <replacement>
      <!-- Remove bad generation. Array<> ends up in the list -->
      <token>@List\\('Array.{4}(.*).{4}'\\)</token>
      <value>@List('$1')</value>
    </replacement>
    <replacement>
      <!-- MUST BE LAST OR YOU WILL HAVE DOUBLE ANNOTATIONS. Annotate all Time strings with a StringDateProp -->
      <token>((.*Time: string) =.*)</token>
      <value>\\@StringDateProp\\(\\)
        $1
      </value>
    </replacement>
  </replacements>
</configuration>
</plugin>`;

  public currencyMappingCode = `let allCurrencies:Currency[] = [];

jsonObj.currencies.forEach((ele) => {
    let cur:Currency = null;
    EntityMapper.mapEntityTreeFrom(ele, cur, Currency, entityDataService);
    allCurrencies.push(cur)
});`;

  public currencyCode = `{
    currencies: [
        { code: "CHF", name: "Swiss Francs" },
        { code: "EUR", name: "Euros" }
    ]
}`;

  public goodInitCode = `export class {
    name: string = undefined;
}`;

  public badInitCode = `export class {
    name: string;
}`;

  public baseEntityCode = `import {BaseEntity} from "@six-group/base-angular-framework/core";

export class Currency implements BaseEntity<Currency> {

  _id: string = null;

  name: string = null;
  code: string = null;
  exchangeRateCHF: number = null;

  override getClassName(): string {
    return "Currency";
  }

  override postProcess() {
    this._id = this.name + this.code;
  }
}`;

  constructor() {
    super();
  }

  getEventGrid(id: string): any {
  }

  hookObservables(): void {

  }

  override ngOnInit() {
    super.ngOnInit();
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
  }


}
